import { createApp } from "vue";
import "../assets/theme.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// FontAwesome imports
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faDollarSign,
  faMinus,
  faMoon,
  faPlus,
  faShoppingCart,
  faSun,
  faTimes,
  faTrash,
  faWeight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add icons to the library
library.add(
  faShoppingCart,
  faPlus,
  faMinus,
  faTrash,
  faCheck,
  faTimes,
  faXmark,
  faDollarSign,
  faArrowLeft,
  faArrowRight,
  faWeight,
  faMoon,
  faSun
);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(store);
app.use(router);
app.mount("#app");
