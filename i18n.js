import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import hu from './configLocs/hu';
import en from './configLocs/en';
import { I18nManager } from 'react-native';

i18n.fallbacks = true;
i18n.translations = {hu,en};
i18n.locale = Localization.locale;

export default i18n;