#!/usr/bin/env python3
"""
Generate the two figures for paper C2 (price-integrity auditing) as PDF,
sized for a single IEEEtran conference column.

Each figure replaces a table that was previously carried in prose+tabular
form. The point is to shorten the written text: the figures carry the data,
the prose carries only the argument.

Fig 1  Reproduction outcome  -> replaces Table `tab:classify` (4 cols)
Fig 2  Triangulation         -> replaces Table `tab:division`
"""
from pathlib import Path

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
import numpy as np

# IEEEtran conference column width: 3.5in text width in a 2-column layout.
COL_W = 3.5
OUT = Path(__file__).resolve().parent / "figures"
OUT.mkdir(parents=True, exist_ok=True)

plt.rcParams.update({
    "font.family": "serif",
    "font.serif": ["Times New Roman", "DejaVu Serif"],
    "font.size": 8,
    "axes.labelsize": 8,
    "axes.titlesize": 8.5,
    "xtick.labelsize": 7.5,
    "ytick.labelsize": 7.5,
    "legend.fontsize": 7.5,
    "axes.linewidth": 0.6,
    "xtick.major.width": 0.6,
    "ytick.major.width": 0.6,
    "pdf.fonttype": 42,      # embed as Type 42 so IEEEtran/pdftex keeps text
    "figure.dpi": 300,
})


def fig1_reproduction():
    """Recorded totals vs the totals the code can produce.

    The whole paper turns on one fact: two sessions reported a number no
    build can produce, four reported one it produces exactly. The verdict
    sits under each pair of bars rather than in a side panel, so the
    figure stays legible at 3.5in column width.
    """
    sessions = ["R05", "R07", "R08", "SEQ-P08", "R03", "R06"]
    recorded = [198.00, 198.00, 100.98, 100.98, 166.86, 75.06]
    computed = [100.98, 100.98, 100.98, 100.98, 166.86, 69.66]

    ok = [abs(r - c) < 0.005 for r, c in zip(recorded, computed)]

    fig, ax = plt.subplots(figsize=(COL_W, 1.95))

    x = np.arange(len(sessions))
    w = 0.40
    ax.bar(x - w / 2, recorded, w, label="Recorded in session",
           color="#b9c6d4", edgecolor="#2f3b47", linewidth=0.5, zorder=3)
    ax.bar(x + w / 2, computed, w, label="Computed by code",
           color="#2f3b47", edgecolor="#2f3b47", linewidth=0.5, zorder=3)

    # Gap marker on the two sessions that disagree.
    for i, good in enumerate(ok):
        if good:
            continue
        ax.annotate("", xy=(i + w / 2, computed[i]), xytext=(i - w / 2, recorded[i]),
                    arrowprops=dict(arrowstyle="-|>", color="#b03030", lw=1.0,
                                    shrinkA=0, shrinkB=0, mutation_scale=7), zorder=5)
        ax.plot([i - w / 2, i + w / 2], [recorded[i], recorded[i]],
                lw=0.7, color="#b03030", ls=":", zorder=4)

    ax.set_xticks(x)
    ax.set_xticklabels(sessions)
    ax.set_ylabel(r"Displayed total (US\$)")
    ax.set_ylim(0, 235)
    ax.set_xlim(-0.6, len(sessions) - 0.4)
    ax.legend(loc="upper right", frameon=False, handlelength=1.1,
              borderpad=0.2, labelspacing=0.25)
    ax.grid(axis="y", lw=0.4, color="#d8dde3", zorder=0)
    ax.set_axisbelow(True)
    ax.spines["top"].set_visible(False)
    ax.spines["right"].set_visible(False)

    # Verdict strip below the axis: "=" where the recorded total is the
    # computed total, the symbol is far wider than the column spacing and
    # would collide at 3.5in.
    for i, good in enumerate(ok):
        ax.text(i, -30, "$=$" if good else r"$\neq$",
                ha="center", va="top", fontsize=9,
                color="#1b6b3a" if good else "#b03030", fontweight="bold")

    fig.tight_layout(pad=0.35, rect=(0, 0.05, 1, 1))
    fig.savefig(OUT / "p2-fig1-price-arithmetic.pdf", bbox_inches="tight")
    plt.close(fig)


def fig2_triangulation():
    """Code inspection against user observation, per defect.

    Replaces the eight-row division-of-labour table. The point the figure
    has to make visually is the last two rows: the two most severe defects
    were missed by inspection.
    """
    defects = [
        "Home-page price vs catalogue",
        "Keyboard focus indicator",
        "Header/footer links",
        "Stepper icons vs labels",
        "No re-order path",
        "Postal code truncated",
        "USD on localised site",
        "Price presentation",
    ]
    # 1 = flagged/reported, 0 = not
    audit = [1, 1, 1, 1, 1, 1, 0, 0]
    user = [1, 0, 1, 1, 1, 1, 1, 1]

    fig, ax = plt.subplots(figsize=(COL_W, 1.7))
    for i, d in enumerate(defects):
        yy = len(defects) - i - 1
        highlight = i >= 6
        if highlight:
            ax.add_patch(Rectangle((-0.62, yy - 0.42), 2.05, 0.84,
                                   facecolor="#fdf0d5", edgecolor="none", zorder=0))
        ax.plot([0, 0], [yy, yy], marker="s", ms=7, color="#2f3b47", zorder=3)
        ax.plot([1, 1], [yy, yy], marker="s", ms=7,
                color="#2f3b47" if user[i] else "white",
                markeredgecolor="#2f3b47", markeredgewidth=0.8, zorder=3)
        ax.plot([0, 1], [yy, yy], lw=0.7, color="#9aa6b2", zorder=2)
        ax.text(-0.12, yy, d, ha="right", va="center", fontsize=7,
                fontweight="bold" if highlight else "normal")
        if highlight:
            ax.text(1.22, yy, "testing only", ha="left", va="center",
                    fontsize=7, color="#8a5a00", fontweight="bold")

    ax.text(0, 8.3, "Code audit", ha="center", va="bottom", fontsize=7.5,
            fontweight="bold")
    ax.text(1, 8.3, "User testing", ha="center", va="bottom", fontsize=7.5,
            fontweight="bold")
    ax.set_xlim(-0.62, 1.9)
    ax.set_ylim(-0.6, 8.9)
    ax.axis("off")

    fig.tight_layout(pad=0.2)
    fig.savefig(OUT / "p2-fig2-triangulation.pdf", bbox_inches="tight")
    plt.close(fig)


if __name__ == "__main__":
    fig1_reproduction()
    fig2_triangulation()
    for p in sorted(OUT.glob("p2-*.pdf")):
        print(f"{p.name}  {p.stat().st_size / 1024:.1f} KB")
