const data = [
  {
    name: "animation-delay",
    typedom_types: ["Time"],
  },
  {
    name: "animation-direction",
    keywords: ["normal", "reverse", "alternate", "alternate-reverse"],
    typedom_types: ["Keyword"],
  },
  {
    name: "animation-duration",
    typedom_types: ["Time"],
  },
  {
    name: "animation-fill-mode",
    keywords: ["none", "forwards", "backwards", "both"],
    typedom_types: ["Keyword"],
  },
  {
    name: "animation-iteration-count",
    keywords: ["infinite"],
    typedom_types: ["Keyword", "Number"],
  },
  {
    name: "animation-name",
    keywords: ["none"],
    typedom_types: ["Keyword"],
  },
  {
    name: "animation-play-state",
    keywords: ["running", "paused"],
    typedom_types: ["Keyword"],
  },
  {
    name: "animation-timeline",
    keywords: ["none", "auto"],
    typedom_types: ["Keyword"],
  },
  {
    name: "animation-timing-function",
    keywords: [
      "linear",
      "ease",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "jump-both",
      "jump-end",
      "jump-none",
      "jump-start",
      "step-start",
      "step-end",
    ],
    typedom_types: ["Keyword"],
  },
  {
    name: "transition-delay",
    typedom_types: ["Time"],
  },
  {
    name: "transition-duration",
    typedom_types: ["Keyword", "Time"],
  },
  {
    name: "transition-property",
    keywords: ["none"],
    typedom_types: ["Keyword"],
  },
  {
    name: "transition-timing-function",
    keywords: [
      "linear",
      "ease",
      "ease-in",
      "ease-out",
      "ease-in-out",
      "jump-both",
      "jump-end",
      "jump-none",
      "jump-start",
      "step-start",
      "step-end",
    ],
    typedom_types: ["Keyword"],
  },
  {
    name: "color",
    keywords: ["currentcolor"],
    default_value: "StyleColor(Color::kBlack)",
    typedom_types: ["Keyword"],
  },
  {
    name: "direction",
    keywords: ["ltr", "rtl"],
    default_value: "ltr",
    typedom_types: ["Keyword"],
  },
  {
    name: "font-family",
  },
  {
    name: "font-kerning",
    keywords: ["auto", "normal", "none"],
    typedom_types: ["Keyword"],
  },
  {
    name: "font-optical-sizing",
    keywords: ["auto", "none"],
    typedom_types: ["Keyword"],
  },
  {
    name: "font-size",
    keywords: [
      "xx-small",
      "x-small",
      "small",
      "medium",
      "large",
      "x-large",
      "xx-large",
      "xxx-large",
      "larger",
      "smaller",
      "-webkit-xxx-large",
    ],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "font-size-adjust",
    keywords: ["none"],
    typedom_types: ["Keyword", "Number"],
  },
  {
    name: "font-stretch",
    keywords: [
      "normal",
      "ultra-condensed",
      "extra-condensed",
      "condensed",
      "semi-condensed",
      "semi-expanded",
      "expanded",
      "extra-expanded",
      "ultra-expanded",
    ],
    typedom_types: ["Keyword", "Percentage"],
  },
  {
    name: "font-style",
    keywords: ["normal", "italic", "oblique"],
    typedom_types: ["Keyword"],
  },
  {
    name: "font-variant-ligatures",
    keywords: [
      "normal",
      "none",
      "common-ligatures",
      "no-common-ligatures",
      "discretionary-ligatures",
      "no-discretionary-ligatures",
      "historical-ligatures",
      "no-historical-ligatures",
      "contextual",
      "no-contextual",
    ],
    typedom_types: ["Keyword"],
  },
  {
    name: "font-variant-caps",
    keywords: [
      "normal",
      "small-caps",
      "all-small-caps",
      "petite-caps",
      "all-petite-caps",
      "unicase",
      "titling-caps",
    ],
    typedom_types: ["Keyword"],
  },
  {
    name: "font-variant-east-asian",
    keywords: [
      "normal",
      "jis78",
      "jis83",
      "jis90",
      "jis04",
      "simplified",
      "traditional",
      "full-width",
      "proportional-width",
      "ruby",
    ],
    typedom_types: ["Keyword"],
  },
  {
    name: "font-variant-numeric",
    keywords: [
      "normal",
      "lining-nums",
      "oldstyle-nums",
      "proportional-nums",
      "tabular-nums",
      "diagonal-fractions",
      "stacked-fractions",
      "ordinal",
      "slashed-zero",
    ],
    typedom_types: ["Keyword"],
  },
  {
    name: "font-weight",
    keywords: ["normal", "bold", "bolder", "lighter"],
    typedom_types: ["Keyword", "Number"],
  },
  {
    name: "font-feature-settings",
    keywords: ["normal"],
    typedom_types: ["Keyword"],
  },
  {
    name: "font-variation-settings",
    keywords: ["normal"],
    typedom_types: ["Keyword"],
  },
  {
    name: "-webkit-font-smoothing",
  },
  {
    name: "forced-color-adjust",
    keywords: ["auto", "none"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "-webkit-locale",
  },
  {
    name: "math-depth",
    default_value: 0,
    typedom_types: ["Number"],
  },
  {
    name: "text-orientation",
    keywords: ["sideways", "mixed", "upright"],
    default_value: "mixed",
    typedom_types: ["Keyword"],
  },
  {
    name: "-webkit-text-orientation",
  },
  {
    name: "writing-mode",
    keywords: ["horizontal-tb", "vertical-rl", "vertical-lr"],
    default_value: "horizontal-tb",
    typedom_types: ["Keyword"],
  },
  {
    name: "-webkit-writing-mode",
  },
  {
    name: "text-rendering",
    keywords: [
      "auto",
      "optimizespeed",
      "optimizelegibility",
      "geometricprecision",
    ],
    typedom_types: ["Keyword"],
  },
  {
    name: "zoom",
    default_value: "1.0",
  },
  {
    name: "accent-color",
    keywords: ["auto", "currentcolor"],
    default_value: "StyleAutoColor::AutoColor()",
    typedom_types: ["Keyword"],
  },
  {
    name: "align-content",
    default_value:
      "StyleContentAlignmentData(ContentPosition::kNormal, ContentDistributionType::kDefault, OverflowAlignment::kDefault)",
  },
  {
    name: "align-items",
    default_value:
      "StyleSelfAlignmentData(ItemPosition::kNormal, OverflowAlignment::kDefault)",
  },
  {
    name: "alignment-baseline",
    keywords: [
      "auto",
      "baseline",
      "alphabetic",
      "ideographic",
      "middle",
      "central",
      "mathematical",
      "before-edge",
      "text-before-edge",
      "after-edge",
      "text-after-edge",
      "hanging",
    ],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "align-self",
    default_value:
      "StyleSelfAlignmentData(ItemPosition::kAuto, OverflowAlignment::kDefault)",
  },
  {
    name: "aspect-ratio",
    keywords: ["auto"],
    default_value: "StyleAspectRatio(EAspectRatioType::kAuto, FloatSize())",
  },
  {
    name: "backdrop-filter",
    keywords: ["none"],
    default_value: "MakeGarbageCollected<StyleFilterData>()",
    typedom_types: ["Keyword"],
  },
  {
    name: "backface-visibility",
    keywords: ["visible", "hidden"],
    default_value: "visible",
    typedom_types: ["Keyword"],
  },
  {
    name: "background-attachment",
    keywords: ["scroll", "fixed", "local"],
    typedom_types: ["Keyword"],
  },
  {
    name: "background-blend-mode",
    keywords: [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    typedom_types: ["Keyword"],
  },
  {
    name: "background-clip",
    keywords: ["border-box", "padding-box", "content-box"],
    typedom_types: ["Keyword"],
  },
  {
    name: "background-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor(Color::kTransparent)",
    typedom_types: ["Keyword"],
  },
  {
    name: "background-image",
    keywords: ["auto", "none"],
    typedom_types: ["Keyword", "Image"],
  },
  {
    name: "background-origin",
    keywords: ["border-box", "padding-box", "content-box"],
    typedom_types: ["Keyword"],
  },
  {
    name: "background-position-x",
  },
  {
    name: "background-position-y",
  },
  {
    name: "background-repeat-x",
  },
  {
    name: "background-repeat-y",
  },
  {
    name: "background-size",
    keywords: ["auto", "cover", "contain"],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "baseline-shift",
    keywords: ["baseline", "sub", "super"],
    default_value: "Length::Fixed()",
    typedom_types: ["Keyword", "Percentage", "Length"],
  },
  {
    name: "border-bottom-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor::CurrentColor()",
    typedom_types: ["Keyword"],
  },
  {
    name: "border-bottom-left-radius",
    default_value: "LengthSize(Length::Fixed(0), Length::Fixed(0))",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "border-bottom-right-radius",
    default_value: "LengthSize(Length::Fixed(0), Length::Fixed(0))",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "border-bottom-style",
    keywords: [
      "none",
      "hidden",
      "inset",
      "groove",
      "outset",
      "ridge",
      "dotted",
      "dashed",
      "solid",
      "double",
    ],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "border-bottom-width",
    keywords: ["thin", "medium", "thick"],
    default_value: "LayoutUnit(3)",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "border-collapse",
    keywords: ["separate", "collapse"],
    default_value: "separate",
    typedom_types: ["Keyword"],
  },
  {
    name: "border-image-outset",
    typedom_types: ["Length", "Number"],
  },
  {
    name: "border-image-repeat",
    keywords: ["stretch", "repeat", "round", "space"],
    typedom_types: ["Keyword"],
  },
  {
    name: "border-image-slice",
    typedom_types: ["Number", "Percentage"],
  },
  {
    name: "border-image-source",
    keywords: ["none"],
    typedom_types: ["Keyword", "Image"],
  },
  {
    name: "border-image-width",
    keywords: ["auto"],
    typedom_types: ["Keyword", "Length", "Percentage", "Number"],
  },
  {
    name: "border-left-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor::CurrentColor()",
    typedom_types: ["Keyword"],
  },
  {
    name: "border-left-style",
    keywords: [
      "none",
      "hidden",
      "inset",
      "groove",
      "outset",
      "ridge",
      "dotted",
      "dashed",
      "solid",
      "double",
    ],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "border-left-width",
    keywords: ["thin", "medium", "thick"],
    default_value: "LayoutUnit(3)",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "border-right-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor::CurrentColor()",
    typedom_types: ["Keyword"],
  },
  {
    name: "border-right-style",
    keywords: [
      "none",
      "hidden",
      "inset",
      "groove",
      "outset",
      "ridge",
      "dotted",
      "dashed",
      "solid",
      "double",
    ],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "border-right-width",
    keywords: ["thin", "medium", "thick"],
    default_value: "LayoutUnit(3)",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "border-top-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor::CurrentColor()",
    typedom_types: ["Keyword"],
  },
  {
    name: "border-top-left-radius",
    default_value: "LengthSize(Length::Fixed(0), Length::Fixed(0))",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "border-top-right-radius",
    default_value: "LengthSize(Length::Fixed(0), Length::Fixed(0))",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "border-top-style",
    keywords: [
      "none",
      "hidden",
      "inset",
      "groove",
      "outset",
      "ridge",
      "dotted",
      "dashed",
      "solid",
      "double",
    ],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "border-top-width",
    keywords: ["thin", "medium", "thick"],
    default_value: "LayoutUnit(3)",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "bottom",
    keywords: ["auto"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "box-shadow",
    keywords: ["none"],
    default_value: "nullptr",
    typedom_types: ["Keyword"],
  },
  {
    name: "box-sizing",
    keywords: ["content-box", "border-box"],
    default_value: "content-box",
    typedom_types: ["Keyword"],
  },
  {
    name: "break-after",
    keywords: [
      "auto",
      "avoid",
      "avoid-column",
      "avoid-page",
      "column",
      "left",
      "page",
      "recto",
      "right",
      "verso",
    ],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "break-before",
    keywords: [
      "auto",
      "avoid",
      "avoid-column",
      "avoid-page",
      "column",
      "left",
      "page",
      "recto",
      "right",
      "verso",
    ],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "break-inside",
    keywords: ["auto", "avoid", "avoid-column", "avoid-page"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "buffered-rendering",
    keywords: ["auto", "dynamic", "static"],
    default_value: "auto",
  },
  {
    name: "caption-side",
    keywords: ["top", "bottom"],
    default_value: "top",
    typedom_types: ["Keyword"],
  },
  {
    name: "caret-color",
    keywords: ["auto", "currentcolor"],
    default_value: "StyleAutoColor::AutoColor()",
    typedom_types: ["Keyword"],
  },
  {
    name: "clear",
    keywords: ["none", "left", "right", "both", "inline-start", "inline-end"],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "clip",
    keywords: ["auto"],
    default_value: "LengthBox()",
    typedom_types: ["Keyword"],
  },
  {
    name: "clip-path",
    keywords: ["none"],
    default_value: "nullptr",
    typedom_types: ["Keyword"],
  },
  {
    name: "clip-rule",
    keywords: ["nonzero", "evenodd"],
    default_value: "RULE_NONZERO",
    typedom_types: ["Keyword"],
  },
  {
    name: "color-interpolation",
    keywords: ["auto", "srgb", "linearrgb"],
    default_value: "srgb",
    typedom_types: ["Keyword"],
  },
  {
    name: "color-interpolation-filters",
    keywords: ["auto", "srgb", "linearrgb"],
    default_value: "linearrgb",
    typedom_types: ["Keyword"],
  },
  {
    name: "color-rendering",
    keywords: ["auto", "optimizespeed", "optimizequality"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "color-scheme",
    default_value: "Vector<AtomicString, 0>()",
  },
  {
    name: "column-fill",
    keywords: ["balance", "auto"],
    default_value: "balance",
    typedom_types: ["Keyword"],
  },
  {
    name: "contain",
    keywords: [
      "none",
      "strict",
      "content",
      "size",
      "layout",
      "style",
      "paint",
      "inline-size",
      "block-size",
    ],
    default_value: "kContainsNone",
    typedom_types: ["Keyword"],
  },
  {
    name: "contain-intrinsic-size",
    keywords: ["auto"],
    default_value: "LengthSize(Length::Auto(), Length::Auto())",
  },
  {
    name: "container-name",
    keywords: ["none"],
    default_value: "AtomicString()",
    typedom_types: ["Keyword"],
  },
  {
    name: "container-type",
    keywords: ["none", "block-size", "inline-size"],
    default_value: "kContainerTypeNone",
    typedom_types: ["Keyword"],
  },
  {
    name: "content",
    default_value: "nullptr",
  },
  {
    name: "counter-increment",
    keywords: ["none"],
    typedom_types: ["Keyword"],
  },
  {
    name: "counter-reset",
    keywords: ["none"],
    typedom_types: ["Keyword"],
  },
  {
    name: "counter-set",
    keywords: ["none"],
    typedom_types: ["Keyword"],
  },
  {
    name: "cursor",
    keywords: [
      "auto",
      "default",
      "none",
      "context-menu",
      "help",
      "pointer",
      "progress",
      "wait",
      "cell",
      "crosshair",
      "text",
      "vertical-text",
      "alias",
      "copy",
      "move",
      "no-drop",
      "not-allowed",
      "e-resize",
      "n-resize",
      "ne-resize",
      "nw-resize",
      "s-resize",
      "se-resize",
      "sw-resize",
      "w-resize",
      "ew-resize",
      "ns-resize",
      "nesw-resize",
      "nwse-resize",
      "col-resize",
      "row-resize",
      "all-scroll",
      "zoom-in",
      "zoom-out",
      "grab",
      "grabbing",
    ],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "cx",
    default_value: "Length::Fixed()",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "cy",
    default_value: "Length::Fixed()",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "d",
    keywords: ["none"],
    default_value: "nullptr",
    typedom_types: ["Keyword"],
  },
  {
    name: "display",
    keywords: [
      "inline",
      "block",
      "list-item",
      "inline-block",
      "table",
      "inline-table",
      "table-row-group",
      "table-header-group",
      "table-footer-group",
      "table-row",
      "table-column-group",
      "table-column",
      "table-cell",
      "table-caption",
      "-webkit-box",
      "-webkit-inline-box",
      "flex",
      "inline-flex",
      "grid",
      "inline-grid",
      "contents",
      "flow-root",
      "none",
    ],
    typedom_types: ["Keyword"],
  },
  {
    name: "dominant-baseline",
    keywords: [
      "auto",
      "alphabetic",
      "ideographic",
      "middle",
      "central",
      "mathematical",
      "hanging",
      "use-script",
      "no-change",
      "reset-size",
      "text-after-edge",
      "text-before-edge",
    ],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "empty-cells",
    keywords: ["show", "hide"],
    default_value: "show",
    typedom_types: ["Keyword"],
  },
  {
    name: "fill",
    default_value: "SVGPaint(Color::kBlack)",
  },
  {
    name: "fill-opacity",
    default_value: "1",
    typedom_types: ["Number"],
  },
  {
    name: "fill-rule",
    keywords: ["nonzero", "evenodd"],
    default_value: "RULE_NONZERO",
    typedom_types: ["Keyword"],
  },
  {
    name: "filter",
    keywords: ["none"],
    default_value: "MakeGarbageCollected<StyleFilterData>()",
    typedom_types: ["Keyword"],
  },
  {
    name: "flex-basis",
    keywords: ["auto"],
    default_value: "Length::Auto()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "flex-direction",
    keywords: ["row", "row-reverse", "column", "column-reverse"],
    default_value: "row",
    typedom_types: ["Keyword"],
  },
  {
    name: "flex-grow",
    default_value: "0.0f",
    typedom_types: ["Number"],
  },
  {
    name: "flex-shrink",
    default_value: "1.0f",
    typedom_types: ["Number"],
  },
  {
    name: "flex-wrap",
    keywords: ["nowrap", "wrap", "wrap-reverse"],
    default_value: "nowrap",
    typedom_types: ["Keyword"],
  },
  {
    name: "float",
    keywords: ["none", "left", "right", "inline-start", "inline-end"],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "flood-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor(Color::kBlack)",
    typedom_types: ["Keyword"],
  },
  {
    name: "flood-opacity",
    default_value: "1",
    typedom_types: ["Number"],
  },
  {
    name: "grid-auto-columns",
    keywords: ["auto", "min-content", "max-content"],
    default_value: "GridTrackList(GridTrackSize(Length::Auto()))",
    typedom_types: ["Keyword", "Length", "Percentage", "Flex"],
  },
  {
    name: "grid-auto-flow",
    keywords: ["row", "column"],
    default_value: "kAutoFlowRow",
    typedom_types: ["Keyword"],
  },
  {
    name: "grid-auto-rows",
    keywords: ["auto", "min-content", "max-content"],
    default_value: "GridTrackList(GridTrackSize(Length::Auto()))",
    typedom_types: ["Keyword", "Length", "Percentage", "Flex"],
  },
  {
    name: "grid-column-end",
    keywords: ["auto"],
    default_value: "GridPosition()",
    typedom_types: ["Keyword"],
  },
  {
    name: "grid-column-start",
    keywords: ["auto"],
    default_value: "GridPosition()",
    typedom_types: ["Keyword"],
  },
  {
    name: "grid-row-end",
    keywords: ["auto"],
    default_value: "GridPosition()",
    typedom_types: ["Keyword"],
  },
  {
    name: "grid-row-start",
    keywords: ["auto"],
    default_value: "GridPosition()",
    typedom_types: ["Keyword"],
  },
  {
    name: "grid-template-areas",
    keywords: ["none"],
    typedom_types: ["Keyword"],
  },
  {
    name: "grid-template-columns",
    keywords: ["none"],
    default_value: "GridTrackList()",
    typedom_types: ["Keyword"],
  },
  {
    name: "grid-template-rows",
    keywords: ["none"],
    default_value: "GridTrackList()",
    typedom_types: ["Keyword"],
  },
  {
    name: "height",
    keywords: ["auto", "fit-content", "min-content", "max-content"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "hyphens",
    keywords: ["none", "manual", "auto"],
    default_value: "manual",
    typedom_types: ["Keyword"],
  },
  {
    name: "image-rendering",
    keywords: [
      "auto",
      "optimizespeed",
      "optimizequality",
      "-webkit-optimize-contrast",
      "pixelated",
    ],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "image-orientation",
    default_value: "true",
  },
  {
    name: "isolation",
    keywords: ["auto", "isolate"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "justify-content",
    default_value:
      "StyleContentAlignmentData(ContentPosition::kNormal, ContentDistributionType::kDefault, OverflowAlignment::kDefault)",
  },
  {
    name: "justify-items",
    default_value:
      "StyleSelfAlignmentData(ItemPosition::kLegacy, OverflowAlignment::kDefault)",
  },
  {
    name: "justify-self",
    default_value:
      "StyleSelfAlignmentData(ItemPosition::kAuto, OverflowAlignment::kDefault)",
  },
  {
    name: "left",
    keywords: ["auto"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "letter-spacing",
    keywords: ["normal"],
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "lighting-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor(Color::kWhite)",
    typedom_types: ["Keyword"],
  },
  {
    name: "line-height",
    keywords: ["normal"],
    default_value: "Length::Percent(-100.0)",
    typedom_types: ["Keyword", "Length", "Number", "Percentage"],
  },
  {
    name: "line-height-step",
    default_value: "0",
    typedom_types: ["Length"],
  },
  {
    name: "list-style-image",
    keywords: ["none"],
    default_value: "nullptr",
    typedom_types: ["Keyword", "Image"],
  },
  {
    name: "list-style-position",
    keywords: ["outside", "inside"],
    default_value: "outside",
    typedom_types: ["Keyword"],
  },
  {
    name: "list-style-type",
    keywords: [
      "disc",
      "circle",
      "square",
      "disclosure-open",
      "disclosure-closed",
      "decimal",
      "none",
    ],
    default_value: 'ListStyleTypeData::CreateCounterStyle("disc", nullptr)',
  },
  {
    name: "margin-bottom",
    keywords: ["auto"],
    default_value: "Length::Fixed()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "margin-left",
    keywords: ["auto"],
    default_value: "Length::Fixed()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "margin-right",
    keywords: ["auto"],
    default_value: "Length::Fixed()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "margin-top",
    keywords: ["auto"],
    default_value: "Length::Fixed()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "marker-end",
    keywords: ["none"],
    default_value: "nullptr",
    typedom_types: ["Keyword"],
  },
  {
    name: "marker-mid",
    keywords: ["none"],
    default_value: "nullptr",
    typedom_types: ["Keyword"],
  },
  {
    name: "marker-start",
    keywords: ["none"],
    default_value: "nullptr",
    typedom_types: ["Keyword"],
  },
  {
    name: "mask",
    default_value: "nullptr",
  },
  {
    name: "mask-type",
    keywords: ["luminance", "alpha"],
    default_value: "luminance",
    typedom_types: ["Keyword"],
  },
  {
    name: "math-shift",
    keywords: ["normal", "compact"],
    default_value: "normal",
    typedom_types: ["Keyword"],
  },
  {
    name: "math-style",
    keywords: ["normal", "compact"],
    default_value: "normal",
    typedom_types: ["Keyword"],
  },
  {
    name: "max-height",
    keywords: ["none"],
    default_value: "Length::None()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "max-width",
    keywords: ["none"],
    default_value: "Length::None()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "min-height",
    default_value: "Length()",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "min-width",
    default_value: "Length()",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "mix-blend-mode",
    keywords: [
      "normal",
      "multiply",
      "screen",
      "overlay",
      "darken",
      "lighten",
      "color-dodge",
      "color-burn",
      "hard-light",
      "soft-light",
      "difference",
      "exclusion",
      "hue",
      "saturation",
      "color",
      "luminosity",
    ],
    default_value: "normal",
    typedom_types: ["Keyword"],
  },
  {
    name: "object-fit",
    keywords: ["fill", "contain", "cover", "none", "scale-down"],
    default_value: "fill",
    typedom_types: ["Keyword"],
  },
  {
    name: "object-position",
    default_value: "LengthPoint(Length::Percent(50.0), Length::Percent(50.0))",
    typedom_types: ["Keyword", "Position"],
  },
  {
    name: "offset-anchor",
    keywords: ["auto"],
    default_value: "LengthPoint(Length::Auto(), Length::Auto())",
    typedom_types: ["Keyword", "Position"],
  },
  {
    name: "offset-distance",
    default_value: "Length::Fixed(0)",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "offset-path",
    keywords: ["none"],
    default_value: "nullptr",
    typedom_types: ["Keyword"],
  },
  {
    name: "offset-position",
    keywords: ["auto"],
    default_value: "LengthPoint(Length::Auto(), Length::Auto())",
    typedom_types: ["Keyword", "Position"],
  },
  {
    name: "offset-rotate",
    keywords: ["auto", "reverse"],
    default_value: "StyleOffsetRotation(0, OffsetRotationType::kAuto)",
    typedom_types: ["Keyword", "Angle"],
  },
  {
    name: "opacity",
    default_value: "1.0",
    typedom_types: ["Number"],
  },
  {
    name: "order",
    default_value: "0",
    typedom_types: ["Number"],
  },
  {
    name: "origin-trial-test-property",
    keywords: ["normal", "none"],
    default_value: "normal",
    typedom_types: ["Keyword"],
  },
  {
    name: "orphans",
    default_value: "2",
    typedom_types: ["Number"],
  },
  {
    name: "outline-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor::CurrentColor()",
    typedom_types: ["Keyword"],
  },
  {
    name: "outline-offset",
    default_value: "LayoutUnit(0)",
    typedom_types: ["Length"],
  },
  {
    name: "outline-style",
    keywords: [
      "none",
      "hidden",
      "inset",
      "groove",
      "outset",
      "ridge",
      "dotted",
      "dashed",
      "solid",
      "double",
    ],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "outline-width",
    keywords: ["thin", "medium", "thick"],
    default_value: "LayoutUnit(3)",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "overflow-anchor",
    keywords: ["visible", "none", "auto"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "overflow-wrap",
    keywords: ["normal", "break-word", "anywhere"],
    default_value: "normal",
    typedom_types: ["Keyword"],
  },
  {
    name: "overflow-inline",
  },
  {
    name: "overflow-block",
  },
  {
    name: "overflow-clip-margin",
    default_value: "LayoutUnit()",
  },
  {
    name: "overflow-x",
    keywords: ["visible", "hidden", "scroll", "auto", "overlay", "clip"],
    default_value: "visible",
    typedom_types: ["Keyword"],
  },
  {
    name: "overflow-y",
    keywords: ["visible", "hidden", "scroll", "auto", "overlay", "clip"],
    default_value: "visible",
    typedom_types: ["Keyword"],
  },
  {
    name: "overscroll-behavior-inline",
  },
  {
    name: "overscroll-behavior-block",
  },
  {
    name: "overscroll-behavior-x",
    keywords: ["auto", "contain", "none"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "overscroll-behavior-y",
    keywords: ["auto", "contain", "none"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "padding-bottom",
    default_value: "Length::Fixed()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "padding-left",
    default_value: "Length::Fixed()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "padding-right",
    default_value: "Length::Fixed()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "padding-top",
    default_value: "Length::Fixed()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "page",
    keywords: ["auto"],
    default_value: "AtomicString()",
    typedom_types: ["Keyword"],
  },
  {
    name: "page-orientation",
    default_value: "PageOrientation::kUpright",
  },
  {
    name: "paint-order",
    keywords: ["normal", "fill", "stroke", "markers"],
    default_value: "kPaintOrderNormal",
    typedom_types: ["Keyword"],
  },
  {
    name: "perspective",
    keywords: ["none"],
    default_value: "-1.0",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "perspective-origin",
    default_value: "LengthPoint(Length::Percent(50.0), Length::Percent(50.0))",
    typedom_types: ["Position"],
  },
  {
    name: "pointer-events",
    keywords: [
      "none",
      "auto",
      "stroke",
      "fill",
      "painted",
      "visible",
      "visiblestroke",
      "visiblefill",
      "visiblepainted",
      "bounding-box",
      "all",
    ],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "position",
    keywords: ["static", "relative", "absolute", "fixed", "sticky"],
    default_value: "static",
    typedom_types: ["Keyword"],
  },
  {
    name: "quotes",
    keywords: ["auto", "none"],
    default_value: "nullptr",
    typedom_types: ["Keyword"],
  },
  {
    name: "content-visibility",
    keywords: ["visible", "auto", "hidden", "hidden-matchable"],
    default_value: "visible",
    typedom_types: ["Keyword"],
  },
  {
    name: "resize",
    keywords: ["none", "both", "horizontal", "vertical", "block", "inline"],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "right",
    keywords: ["auto"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "r",
    default_value: "Length::Fixed()",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "rx",
    keywords: ["auto"],
    default_value: "Length::Auto()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "ry",
    keywords: ["auto"],
    default_value: "Length::Auto()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "scrollbar-gutter",
    keywords: ["auto", "stable", "both-edges"],
    default_value: "kScrollbarGutterAuto",
    typedom_types: ["Keyword"],
  },
  {
    name: "scrollbar-width",
    keywords: ["auto", "thin", "none"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "scroll-behavior",
    keywords: ["auto", "smooth"],
    default_value: "mojom::blink::ScrollBehavior::kAuto",
    typedom_types: ["Keyword"],
  },
  {
    name: "scroll-margin-block-end",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "scroll-customization",
    default_value: "scroll_customization::kScrollDirectionNone",
  },
  {
    name: "scroll-margin-block-start",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "scroll-margin-bottom",
    default_value: "0.0f",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "scroll-margin-inline-end",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "scroll-margin-inline-start",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "scroll-margin-left",
    default_value: "0.0f",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "scroll-margin-right",
    default_value: "0.0f",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "scroll-margin-top",
    default_value: "0.0f",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "scroll-padding-block-end",
    keywords: ["auto"],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "scroll-padding-block-start",
    keywords: ["auto"],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "scroll-padding-bottom",
    keywords: ["auto"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "scroll-padding-inline-end",
    keywords: ["auto"],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "scroll-padding-inline-start",
    keywords: ["auto"],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "scroll-padding-left",
    keywords: ["auto"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "scroll-padding-right",
    keywords: ["auto"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "scroll-padding-top",
    keywords: ["auto"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "scroll-snap-align",
    keywords: ["none", "start", "end", "center"],
    default_value: "cc::ScrollSnapAlign()",
    typedom_types: ["Keyword"],
  },
  {
    name: "scroll-snap-stop",
    keywords: ["normal", "always"],
    default_value: "normal",
    typedom_types: ["Keyword"],
  },
  {
    name: "scroll-snap-type",
    keywords: [
      "none",
      "x",
      "y",
      "block",
      "inline",
      "both",
      "mandatory",
      "proximity",
    ],
    default_value: "cc::ScrollSnapType()",
    typedom_types: ["Keyword"],
  },
  {
    name: "shape-image-threshold",
    default_value: "0.0",
    typedom_types: ["Number"],
  },
  {
    name: "shape-margin",
    keywords: ["none"],
    default_value: "Length::Fixed(0)",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "shape-outside",
    keywords: ["none"],
    default_value: "nullptr",
    typedom_types: ["Keyword", "Image"],
  },
  {
    name: "shape-rendering",
    keywords: ["auto", "optimizespeed", "crispedges", "geometricprecision"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "size",
  },
  {
    name: "speak",
    keywords: [
      "none",
      "normal",
      "spell-out",
      "digits",
      "literal-punctuation",
      "no-punctuation",
    ],
    default_value: "normal",
  },
  {
    name: "stop-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor(Color::kBlack)",
    typedom_types: ["Keyword"],
  },
  {
    name: "stop-opacity",
    default_value: "1",
    typedom_types: ["Number"],
  },
  {
    name: "stroke",
    default_value: "SVGPaint()",
  },
  {
    name: "stroke-dasharray",
    keywords: ["none"],
    default_value: "EmptyDashArray()",
    typedom_types: ["Keyword"],
  },
  {
    name: "stroke-dashoffset",
    default_value: "Length::Fixed()",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "stroke-linecap",
    keywords: ["butt", "round", "square"],
    default_value: "kButtCap",
    typedom_types: ["Keyword"],
  },
  {
    name: "stroke-linejoin",
    keywords: ["miter", "bevel", "round"],
    default_value: "kMiterJoin",
    typedom_types: ["Keyword"],
  },
  {
    name: "stroke-miterlimit",
    default_value: "4",
    typedom_types: ["Number"],
  },
  {
    name: "stroke-opacity",
    default_value: "1",
    typedom_types: ["Number"],
  },
  {
    name: "stroke-width",
    default_value: "UnzoomedLength(Length::Fixed(1))",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "table-layout",
    keywords: ["auto", "fixed"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "tab-size",
    default_value: "TabSize(8)",
    typedom_types: ["Number", "Length"],
  },
  {
    name: "text-align",
    keywords: [
      "left",
      "right",
      "center",
      "justify",
      "-webkit-left",
      "-webkit-right",
      "-webkit-center",
      "start",
      "end",
    ],
    default_value: "start",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-align-last",
    keywords: ["auto", "start", "end", "left", "right", "center", "justify"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-anchor",
    keywords: ["start", "middle", "end"],
    default_value: "start",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-combine-upright",
    keywords: ["none", "all"],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-decoration-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor::CurrentColor()",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-decoration-line",
    keywords: ["none", "underline", "overline", "line-through", "blink"],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-decoration-skip-ink",
    keywords: ["none", "auto"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-decoration-style",
    keywords: ["solid", "double", "dotted", "dashed", "wavy"],
    default_value: "solid",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-decoration-thickness",
    keywords: ["auto", "from-font"],
    default_value: "TextDecorationThickness(Length::Auto())",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "text-indent",
    default_value: "Length::Fixed()",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "text-justify",
    keywords: ["auto", "none", "inter-word", "distribute"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-overflow",
    keywords: ["clip", "ellipsis"],
    default_value: "clip",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-shadow",
    keywords: ["none"],
    default_value: "nullptr",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-size-adjust",
    keywords: ["none", "auto"],
    default_value: "TextSizeAdjust::AdjustAuto()",
    typedom_types: ["Keyword", "Percentage"],
  },
  {
    name: "text-transform",
    keywords: ["capitalize", "uppercase", "lowercase", "none", "math-auto"],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "text-underline-offset",
    keywords: ["auto"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "text-underline-position",
    keywords: ["auto", "from-font", "under", "left", "right"],
    default_value: "kTextUnderlinePositionAuto",
    typedom_types: ["Keyword"],
  },
  {
    name: "top",
    keywords: ["auto"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "touch-action",
    keywords: [
      "auto",
      "none",
      "pan-x",
      "pan-left",
      "pan-right",
      "pan-y",
      "pan-up",
      "pan-down",
      "pinch-zoom",
      "manipulation",
    ],
    default_value: "TouchAction::kAuto",
    typedom_types: ["Keyword"],
  },
  {
    name: "transform",
    keywords: ["none"],
    default_value: "EmptyTransformOperations()",
    typedom_types: ["Keyword", "Transform"],
  },
  {
    name: "transform-box",
    keywords: ["fill-box", "view-box"],
    default_value: "view-box",
    typedom_types: ["Keyword"],
  },
  {
    name: "transform-origin",
    default_value:
      "TransformOrigin(Length::Percent(50.0), Length::Percent(50.0), 0)",
  },
  {
    name: "transform-style",
    keywords: ["flat", "preserve-3d"],
    default_value: "flat",
    typedom_types: ["Keyword"],
  },
  {
    name: "translate",
    default_value: "nullptr",
  },
  {
    name: "rotate",
    default_value: "nullptr",
  },
  {
    name: "scale",
    default_value: "nullptr",
  },
  {
    name: "unicode-bidi",
    keywords: [
      "normal",
      "embed",
      "bidi-override",
      "isolate",
      "plaintext",
      "isolate-override",
    ],
    default_value: "normal",
    typedom_types: ["Keyword"],
  },
  {
    name: "vector-effect",
    keywords: ["none", "non-scaling-stroke"],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "vertical-align",
    keywords: ["baseline", "sub", "super", "text-top", "text-bottom", "middle"],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "visibility",
    keywords: ["visible", "hidden", "collapse"],
    default_value: "visible",
    typedom_types: ["Keyword"],
  },
  {
    name: "x",
    default_value: "Length::Fixed()",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "y",
    default_value: "Length::Fixed()",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "appearance",
    default_value: "kNoControlPart",
  },
  {
    name: "-webkit-appearance",
  },
  {
    name: "-webkit-app-region",
    keywords: ["none", "drag", "no-drag"],
    default_value: "none",
  },
  {
    name: "-webkit-border-horizontal-spacing",
    default_value: "0",
  },
  {
    name: "-webkit-border-image",
  },
  {
    name: "-webkit-border-vertical-spacing",
    default_value: "0",
  },
  {
    name: "-webkit-box-align",
    keywords: ["stretch", "start", "center", "end", "baseline"],
    default_value: "stretch",
  },
  {
    name: "-webkit-box-decoration-break",
    keywords: ["slice", "clone"],
    default_value: "slice",
  },
  {
    name: "-webkit-box-direction",
    keywords: ["normal", "reverse"],
    default_value: "normal",
  },
  {
    name: "-webkit-box-flex",
    default_value: "0.0f",
  },
  {
    name: "-webkit-box-ordinal-group",
    default_value: "1",
  },
  {
    name: "-webkit-box-orient",
    keywords: ["horizontal", "vertical"],
    default_value: "horizontal",
  },
  {
    name: "-webkit-box-pack",
    keywords: ["start", "center", "end", "justify"],
    default_value: "start",
  },
  {
    name: "-webkit-box-reflect",
    default_value: "nullptr",
  },
  {
    name: "column-count",
    keywords: ["auto"],
    default_value: "1",
    typedom_types: ["Keyword", "Number"],
  },
  {
    name: "column-gap",
    keywords: ["normal"],
    default_value: "absl::nullopt",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "row-gap",
    keywords: ["normal"],
    default_value: "absl::nullopt",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "column-rule-color",
    keywords: ["currentcolor"],
    default_value: "StyleColor::CurrentColor()",
    typedom_types: ["Keyword"],
  },
  {
    name: "column-rule-style",
    keywords: [
      "none",
      "hidden",
      "inset",
      "groove",
      "outset",
      "ridge",
      "dotted",
      "dashed",
      "solid",
      "double",
    ],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "column-rule-width",
    keywords: ["thin", "medium", "thick"],
    default_value: "LayoutUnit(3)",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "column-span",
    keywords: ["none", "all"],
    default_value: "none",
    typedom_types: ["Keyword"],
  },
  {
    name: "column-width",
    keywords: ["auto"],
    default_value: "0.0f",
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "-webkit-highlight",
    default_value: "g_null_atom",
  },
  {
    name: "-webkit-hyphenate-character",
    default_value: "AtomicString()",
  },
  {
    name: "-webkit-line-break",
    keywords: [
      "auto",
      "loose",
      "normal",
      "strict",
      "after-white-space",
      "anywhere",
    ],
    default_value: "auto",
  },
  {
    name: "line-break",
    keywords: ["auto", "loose", "normal", "strict", "anywhere"],
    typedom_types: ["Keyword"],
  },
  {
    name: "-webkit-line-clamp",
    default_value: "0",
  },
  {
    name: "-webkit-mask-box-image-outset",
  },
  {
    name: "-webkit-mask-box-image-repeat",
  },
  {
    name: "-webkit-mask-box-image-slice",
  },
  {
    name: "-webkit-mask-box-image-source",
  },
  {
    name: "-webkit-mask-box-image-width",
  },
  {
    name: "-webkit-mask-clip",
  },
  {
    name: "-webkit-mask-composite",
  },
  {
    name: "-webkit-mask-image",
  },
  {
    name: "-webkit-mask-origin",
  },
  {
    name: "-webkit-mask-position-x",
  },
  {
    name: "-webkit-mask-position-y",
  },
  {
    name: "-webkit-mask-repeat-x",
  },
  {
    name: "-webkit-mask-repeat-y",
  },
  {
    name: "-webkit-mask-size",
  },
  {
    name: "-webkit-perspective-origin-x",
  },
  {
    name: "-webkit-perspective-origin-y",
  },
  {
    name: "-webkit-print-color-adjust",
    keywords: ["economy", "exact"],
    default_value: "economy",
  },
  {
    name: "-webkit-rtl-ordering",
    keywords: ["logical", "visual"],
    default_value: "logical",
  },
  {
    name: "-webkit-ruby-position",
    keywords: ["before", "after"],
    default_value: "before",
  },
  {
    name: "ruby-position",
  },
  {
    name: "-webkit-tap-highlight-color",
    default_value: "StyleColor(LayoutTheme::TapHighlightColor())",
  },
  {
    name: "-webkit-text-combine",
  },
  {
    name: "-webkit-text-emphasis-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-webkit-text-emphasis-position",
    default_value: "TextEmphasisPosition::kOverRight",
  },
  {
    name: "-webkit-text-emphasis-style",
  },
  {
    name: "-webkit-text-fill-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-webkit-text-security",
    keywords: ["none", "disc", "circle", "square"],
    default_value: "none",
  },
  {
    name: "-webkit-text-stroke-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-webkit-text-stroke-width",
    default_value: "0",
  },
  {
    name: "-webkit-transform-origin-x",
  },
  {
    name: "-webkit-transform-origin-y",
  },
  {
    name: "-webkit-transform-origin-z",
  },
  {
    name: "-webkit-user-drag",
    keywords: ["auto", "none", "element"],
    default_value: "auto",
  },
  {
    name: "-webkit-user-modify",
    keywords: ["read-only", "read-write", "read-write-plaintext-only"],
    default_value: "read-only",
  },
  {
    name: "user-select",
    keywords: ["auto", "none", "text", "all"],
    default_value: "auto",
    typedom_types: ["Keyword"],
  },
  {
    name: "white-space",
    keywords: [
      "none",
      "normal",
      "pre",
      "pre-wrap",
      "pre-line",
      "nowrap",
      "-webkit-nowrap",
      "break-spaces",
    ],
    default_value: "normal",
    typedom_types: ["Keyword"],
  },
  {
    name: "widows",
    default_value: "2",
    typedom_types: ["Number"],
  },
  {
    name: "width",
    keywords: ["auto", "fit-content", "min-content", "max-content"],
    default_value: "Length()",
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "will-change",
    keywords: ["auto"],
    typedom_types: ["Keyword"],
  },
  {
    name: "word-break",
    keywords: ["normal", "break-all", "keep-all", "break-word"],
    default_value: "normal",
    typedom_types: ["Keyword"],
  },
  {
    name: "word-spacing",
    keywords: ["normal"],
    typedom_types: ["Keyword", "Length"],
  },
  {
    name: "z-index",
    keywords: ["auto"],
    default_value: "0",
    typedom_types: ["Keyword", "Number"],
  },
  {
    name: "inline-size",
    keywords: ["auto"],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "block-size",
    keywords: ["auto"],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "min-inline-size",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "min-block-size",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "max-inline-size",
    keywords: ["none"],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "max-block-size",
    keywords: ["none"],
    typedom_types: ["Keyword", "Length", "Percentage"],
  },
  {
    name: "margin-inline-start",
    keywords: ["auto"],
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "margin-inline-end",
    keywords: ["auto"],
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "margin-block-start",
    keywords: ["auto"],
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "margin-block-end",
    keywords: ["auto"],
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "padding-inline-start",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "padding-inline-end",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "padding-block-start",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "padding-block-end",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "border-inline-start-width",
  },
  {
    name: "border-inline-start-style",
  },
  {
    name: "border-inline-start-color",
  },
  {
    name: "border-inline-end-width",
  },
  {
    name: "border-inline-end-style",
  },
  {
    name: "border-inline-end-color",
  },
  {
    name: "border-block-start-width",
  },
  {
    name: "border-block-start-style",
  },
  {
    name: "border-block-start-color",
  },
  {
    name: "border-block-end-width",
  },
  {
    name: "border-block-end-style",
  },
  {
    name: "border-block-end-color",
  },
  {
    name: "inset-inline-start",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "inset-inline-end",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "inset-block-start",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "inset-block-end",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "border-start-start-radius",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "border-start-end-radius",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "border-end-start-radius",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "border-end-end-radius",
    typedom_types: ["Length", "Percentage"],
  },
  {
    name: "-webkit-border-end-color",
  },
  {
    name: "-webkit-border-end-style",
  },
  {
    name: "-webkit-border-end-width",
  },
  {
    name: "-webkit-border-start-color",
  },
  {
    name: "-webkit-border-start-style",
  },
  {
    name: "-webkit-border-start-width",
  },
  {
    name: "-webkit-border-before-color",
  },
  {
    name: "-webkit-border-before-style",
  },
  {
    name: "-webkit-border-before-width",
  },
  {
    name: "-webkit-border-after-color",
  },
  {
    name: "-webkit-border-after-style",
  },
  {
    name: "-webkit-border-after-width",
  },
  {
    name: "-webkit-margin-end",
  },
  {
    name: "-webkit-margin-start",
  },
  {
    name: "-webkit-margin-before",
  },
  {
    name: "-webkit-margin-after",
  },
  {
    name: "-webkit-padding-end",
  },
  {
    name: "-webkit-padding-start",
  },
  {
    name: "-webkit-padding-before",
  },
  {
    name: "-webkit-padding-after",
  },
  {
    name: "-webkit-logical-width",
  },
  {
    name: "-webkit-logical-height",
  },
  {
    name: "-webkit-min-logical-width",
  },
  {
    name: "-webkit-min-logical-height",
  },
  {
    name: "-webkit-max-logical-width",
  },
  {
    name: "-webkit-max-logical-height",
  },
  {
    name: "all",
  },
  {
    name: "-internal-font-size-delta",
  },
  {
    name: "-webkit-text-decorations-in-effect",
  },
  {
    name: "font-display",
  },
  {
    name: "max-zoom",
  },
  {
    name: "min-zoom",
  },
  {
    name: "orientation",
  },
  {
    name: "src",
  },
  {
    name: "unicode-range",
  },
  {
    name: "user-zoom",
  },
  {
    name: "viewport-fit",
  },
  {
    name: "syntax",
  },
  {
    name: "initial-value",
  },
  {
    name: "inherits",
  },
  {
    name: "source",
  },
  {
    name: "start",
  },
  {
    name: "end",
  },
  {
    name: "time-range",
  },
  {
    name: "ascent-override",
  },
  {
    name: "descent-override",
  },
  {
    name: "line-gap-override",
  },
  {
    name: "system",
  },
  {
    name: "negative",
  },
  {
    name: "prefix",
  },
  {
    name: "suffix",
  },
  {
    name: "range",
  },
  {
    name: "pad",
  },
  {
    name: "fallback",
  },
  {
    name: "symbols",
  },
  {
    name: "additive-symbols",
  },
  {
    name: "speak-as",
  },
  {
    name: "size-adjust",
  },
  {
    name: "animation",
  },
  {
    name: "background",
  },
  {
    name: "background-position",
  },
  {
    name: "background-repeat",
  },
  {
    name: "border",
  },
  {
    name: "border-block",
  },
  {
    name: "border-block-color",
  },
  {
    name: "border-block-end",
  },
  {
    name: "border-block-start",
  },
  {
    name: "border-block-style",
  },
  {
    name: "border-block-width",
  },
  {
    name: "border-bottom",
  },
  {
    name: "border-color",
  },
  {
    name: "border-image",
  },
  {
    name: "border-inline",
  },
  {
    name: "border-inline-color",
  },
  {
    name: "border-inline-end",
  },
  {
    name: "border-inline-start",
  },
  {
    name: "border-inline-style",
  },
  {
    name: "border-inline-width",
  },
  {
    name: "border-left",
  },
  {
    name: "border-radius",
  },
  {
    name: "border-right",
  },
  {
    name: "border-spacing",
  },
  {
    name: "border-style",
    keywords: ["none"],
  },
  {
    name: "border-top",
  },
  {
    name: "border-width",
  },
  {
    name: "container",
  },
  {
    name: "flex",
  },
  {
    name: "flex-flow",
  },
  {
    name: "font",
  },
  {
    name: "font-variant",
  },
  {
    name: "grid",
  },
  {
    name: "place-content",
  },
  {
    name: "place-items",
  },
  {
    name: "place-self",
  },
  {
    name: "grid-area",
  },
  {
    name: "grid-column",
  },
  {
    name: "grid-column-gap",
  },
  {
    name: "grid-row-gap",
  },
  {
    name: "gap",
  },
  {
    name: "grid-gap",
  },
  {
    name: "grid-row",
  },
  {
    name: "grid-template",
  },
  {
    name: "inset",
  },
  {
    name: "inset-block",
  },
  {
    name: "inset-inline",
  },
  {
    name: "list-style",
  },
  {
    name: "margin",
  },
  {
    name: "margin-block",
  },
  {
    name: "margin-inline",
  },
  {
    name: "marker",
  },
  {
    name: "offset",
  },
  {
    name: "outline",
  },
  {
    name: "overflow",
  },
  {
    name: "overscroll-behavior",
  },
  {
    name: "padding",
  },
  {
    name: "padding-block",
  },
  {
    name: "padding-inline",
  },
  {
    name: "page-break-after",
  },
  {
    name: "page-break-before",
  },
  {
    name: "page-break-inside",
  },
  {
    name: "scroll-margin",
  },
  {
    name: "scroll-margin-block",
  },
  {
    name: "scroll-margin-inline",
  },
  {
    name: "scroll-padding",
  },
  {
    name: "scroll-padding-block",
  },
  {
    name: "scroll-padding-inline",
  },
  {
    name: "text-decoration",
  },
  {
    name: "transition",
  },
  {
    name: "-webkit-border-after",
  },
  {
    name: "-webkit-border-before",
  },
  {
    name: "-webkit-border-end",
  },
  {
    name: "-webkit-border-start",
  },
  {
    name: "-webkit-column-break-after",
  },
  {
    name: "-webkit-column-break-before",
  },
  {
    name: "-webkit-column-break-inside",
  },
  {
    name: "column-rule",
  },
  {
    name: "columns",
  },
  {
    name: "-webkit-mask",
  },
  {
    name: "-webkit-mask-box-image",
  },
  {
    name: "-webkit-mask-position",
  },
  {
    name: "-webkit-mask-repeat",
  },
  {
    name: "-webkit-text-emphasis",
  },
  {
    name: "-webkit-text-stroke",
  },
  {
    name: "-internal-visited-color",
    default_value: "StyleColor(Color::kBlack)",
  },
  {
    name: "-internal-visited-caret-color",
    default_value: "StyleAutoColor::AutoColor()",
  },
  {
    name: "-internal-visited-column-rule-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-visited-background-color",
    default_value: "StyleColor(Color::kTransparent)",
  },
  {
    name: "-internal-visited-border-left-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-visited-border-right-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-visited-border-top-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-visited-border-bottom-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-visited-border-inline-start-color",
  },
  {
    name: "-internal-visited-border-inline-end-color",
  },
  {
    name: "-internal-visited-border-block-start-color",
  },
  {
    name: "-internal-visited-border-block-end-color",
  },
  {
    name: "-internal-visited-fill",
    default_value: "SVGPaint(Color::kBlack)",
  },
  {
    name: "-internal-visited-outline-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-visited-stroke",
    default_value: "SVGPaint()",
  },
  {
    name: "-internal-visited-text-decoration-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-visited-text-emphasis-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-visited-text-fill-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-visited-text-stroke-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-forced-background-color",
    default_value: "StyleColor(CSSValueID::kCanvas)",
  },
  {
    name: "-internal-forced-border-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-forced-color",
    default_value: "StyleColor(CSSValueID::kCanvastext)",
  },
  {
    name: "-internal-forced-outline-color",
    default_value: "StyleColor::CurrentColor()",
  },
  {
    name: "-internal-forced-visited-color",
    default_value: "StyleColor(CSSValueID::kCanvastext)",
  },
  {
    name: "-internal-empty-line-height",
    default_value: "false",
  },
  {
    name: "-internal-align-self-block",
    default_value: "false",
  },
  {
    name: "-epub-caption-side",
  },
  {
    name: "-epub-text-combine",
  },
  {
    name: "-epub-text-emphasis",
  },
  {
    name: "-epub-text-emphasis-color",
  },
  {
    name: "-epub-text-emphasis-style",
  },
  {
    name: "-epub-text-orientation",
  },
  {
    name: "-epub-text-transform",
  },
  {
    name: "-epub-word-break",
  },
  {
    name: "-epub-writing-mode",
  },
  {
    name: "-webkit-align-content",
  },
  {
    name: "-webkit-align-items",
  },
  {
    name: "-webkit-align-self",
  },
  {
    name: "-webkit-animation",
  },
  {
    name: "-webkit-animation-delay",
  },
  {
    name: "-webkit-animation-direction",
  },
  {
    name: "-webkit-animation-duration",
  },
  {
    name: "-webkit-animation-fill-mode",
  },
  {
    name: "-webkit-animation-iteration-count",
  },
  {
    name: "-webkit-animation-name",
  },
  {
    name: "-webkit-animation-play-state",
  },
  {
    name: "-webkit-animation-timing-function",
  },
  {
    name: "-webkit-backface-visibility",
  },
  {
    name: "-webkit-background-clip",
  },
  {
    name: "-webkit-background-origin",
  },
  {
    name: "-webkit-background-size",
  },
  {
    name: "-webkit-border-bottom-left-radius",
  },
  {
    name: "-webkit-border-bottom-right-radius",
  },
  {
    name: "-webkit-border-radius",
  },
  {
    name: "-webkit-border-top-left-radius",
  },
  {
    name: "-webkit-border-top-right-radius",
  },
  {
    name: "-webkit-box-shadow",
  },
  {
    name: "-webkit-box-sizing",
  },
  {
    name: "-webkit-clip-path",
  },
  {
    name: "-webkit-column-count",
  },
  {
    name: "-webkit-column-gap",
  },
  {
    name: "-webkit-column-rule",
  },
  {
    name: "-webkit-column-rule-color",
  },
  {
    name: "-webkit-column-rule-style",
  },
  {
    name: "-webkit-column-rule-width",
  },
  {
    name: "-webkit-column-span",
  },
  {
    name: "-webkit-column-width",
  },
  {
    name: "-webkit-columns",
  },
  {
    name: "-webkit-filter",
  },
  {
    name: "-webkit-flex",
  },
  {
    name: "-webkit-flex-basis",
  },
  {
    name: "-webkit-flex-direction",
  },
  {
    name: "-webkit-flex-flow",
  },
  {
    name: "-webkit-flex-grow",
  },
  {
    name: "-webkit-flex-shrink",
  },
  {
    name: "-webkit-flex-wrap",
  },
  {
    name: "-webkit-font-feature-settings",
  },
  {
    name: "-webkit-justify-content",
  },
  {
    name: "-webkit-opacity",
  },
  {
    name: "-webkit-order",
  },
  {
    name: "-webkit-perspective",
  },
  {
    name: "-webkit-perspective-origin",
  },
  {
    name: "-webkit-shape-image-threshold",
  },
  {
    name: "-webkit-shape-margin",
  },
  {
    name: "-webkit-shape-outside",
  },
  {
    name: "-webkit-text-size-adjust",
  },
  {
    name: "-webkit-transform",
  },
  {
    name: "-webkit-transform-origin",
  },
  {
    name: "-webkit-transform-style",
  },
  {
    name: "-webkit-transition",
  },
  {
    name: "-webkit-transition-delay",
  },
  {
    name: "-webkit-transition-duration",
  },
  {
    name: "-webkit-transition-property",
  },
  {
    name: "-webkit-transition-timing-function",
  },
  {
    name: "-webkit-user-select",
  },
  {
    name: "word-wrap",
  },
];

const formatData = data.map(val => {
  val.key = val.name;
  return val;
})

export { formatData as  data };
