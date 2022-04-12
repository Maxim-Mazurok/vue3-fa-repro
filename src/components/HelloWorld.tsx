import { defineCustomElement } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faClockRotateLeft);

export default defineCustomElement({
  name: "HelloWorld",
  render() {
    return <FontAwesomeIcon icon="clock-rotate-left" />;
  },
});
