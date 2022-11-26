import LocalizedStrings from "react-localization";
import { Constants } from ".";
import VN from "../commons/locales/vi";
import { GlobalState } from "../stores/GlobalState";

const Strings = new LocalizedStrings({
    // en,
    VN
});

Strings.setLanguage(GlobalState.language || Constants.Language.VN);

export default Strings;
