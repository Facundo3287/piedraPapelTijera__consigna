import { router } from "./router";

function main () {
    router(document.getElementById('app')! , window.location.pathname)
};

main()