import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

/* import same icons with different style (use alias) */

/* add icons to the library */
library.add(
  faChevronDown,
  faCircleUser,
  faMagnifyingGlass,
  faDownload,
  faArrowRightLong,
  faFileLines
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
