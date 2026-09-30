# Web GIS, Interactive Geovisualization & Cartographic Usability

Advanced cartographic workflows, 3D WebGL terrain visualization, spatiotemporal animation, and spatial User Experience (UX) evaluation developed for the postgraduate course *Cartographic Visualization*.

📄 **[Read the Full Technical Report & Presentation (PDF)](./Cartographic_Visualization_Web_GIS_Report.pdf)**

---

## 📌 Project Modules

### 1. Static Cartographic Modeling & Spatial Distribution Analysis (QGIS)
* **Objective:** Methodological exploration of thematic cartography, measurement scales, and visual variables across the administrative units of Larissa Prefecture, Greece.
* **Methodology & Techniques:**
  * **Attribute & Spatial Classification:** Structured administrative vector layers; classified attributes across Nominal, Ordinal, Interval, and Ratio measurement scales.
  * **Statistical Breakdown (Histograms):** Compared **Natural Breaks (Jenks)** and **Quantile** classification algorithms on skewed population distributions to prevent visual distortion.
  * **Advanced Representation Methods:** Produced Choropleth maps, graduated point distributions, proportional pie charts (gender breakdown), and continuous area-distortion **Contiguous Cartograms** using the `cartogram3` algorithm.

---

### 2. Interactive Web GIS & 3D Geovisualization Platform
* **Objective:** Development of an integrated web platform hosting interactive, temporal, and three-dimensional geospatial assets.
* **Interactive Modules:**
  * **Spatiotemporal Population Animation (Peloponnese 1940–2011):** Formulated an automated Python workflow utilizing `numpy.quantile` to standardize global symbology thresholds across all historical census records, producing smooth frame-blended temporal animations.
  * **3D Surface & Bathymetric Visualization (Santorini Island):** Fused sub-aerial Digital Elevation Models (DEM) with marine bathymetry rasters, serving interactive WebGL scenes with multi-source basemaps (Esri, Bing, Google) via `Qgis2threejs`.
  * **Interactive Web Map & Airport Geoportal:** Generated interactive vector mapping with spatial point clustering, search bars, and dynamic attribute popups via `qgis2web` (Leaflet / OpenLayers framework).
  * **Web Portal Deployment:** Compiled all assets into a unified, responsive HTML web interface.

---

### 3. Cartographic Usability & Eye-Tracking Evaluation
* **Objective:** Human-Computer Interaction (HCI) and usability analysis of web mapping interfaces based on eye-tracking research (Popelka et al., ISPRS).
* **Research & Analytical Scope:**
  * **Quantitative Eye-Tracking Metrics:** Evaluated gaze fixations, scanpath trajectories, trial duration, and visual heatmaps across 34 participants (16 novices vs. 18 GIS experts).
  * **Comparative Benchmark:** Analyzed usability bottlenecks, cognitive overload, and interface clarity across 5 web mapping platforms (*Windy*, *DarkSky*, *In-Počasí*, *YR.no*, *Wundermap*).
  * **User-Centered Design (UCD) Principles:** Synthesized guidelines for reducing visual clutter, optimizing legend accessibility, and designing adaptive user interfaces for diverse skill levels.

---

## 🛠️ Tech Stack & Software
* **GIS & Web Mapping:** QGIS (`qgis2web`, `Qgis2threejs`, `cartogram3`, `QuickMapServices`), Leaflet / OpenLayers, WebGL
* **Programming & Data Analysis:** Python (NumPy, quantile distributions), HTML5/CSS
* **Graphics & Authoring:** GIMP, KompoZer
* **Domain Topics:** Thematic Cartography, 3D Bathymetry/DEM Fusion, Spatiotemporal Analysis, Cartographic UX/UI, Eye-Tracking Usability
