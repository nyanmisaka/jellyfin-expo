/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import * as Localization from 'expo-localization';
import i18next from 'i18next';
import { I18nManager } from 'react-native';
import { initReactI18next } from 'react-i18next';

import en from './langs/en.json';
import ar from './langs/ar.json';
import cs from './langs/cs.json';
import da from './langs/da.json';
import de from './langs/de.json';
import es from './langs/es.json';
import es_AR from './langs/es_AR.json';
import fr from './langs/fr.json';
import hu from './langs/hu.json';
import it from './langs/it.json';
import ja from './langs/ja.json';
import ko from './langs/ko.json';
import nb_NO from './langs/nb_NO.json';
import nl from './langs/nl.json';
import pl from './langs/pl.json';
import pt_BR from './langs/pt_BR.json';
import ro from './langs/ro.json';
import sk from './langs/sk.json';
import sl from './langs/sl.json';
import sv from './langs/sv.json';
import ta from './langs/ta.json';
import zh_Hans from './langs/zh_Hans.json';
import zh_Hant from './langs/zh_Hant.json';
import bg from './langs/bg.json';
import es_419 from './langs/es_419.json';
import es_AR from './langs/es_AR.json';
import fa from './langs/fa.json';
import ru from './langs/ru.json';

const resources = {
	en: { translation: en },
	ar: { translation: ar },
	cs: { translation: cs },
	da: { translation: da },
	de: { translation: de },
	es: { translation: es },
	'es-AR': { translation: es_AR },
	fr: { translation: fr },
	hu: { translation: hu },
	it: { translation: it },
	ja: { translation: ja },
	ko: { translation: ko },
	'nb-NO': { translation: nb_NO },
	nl: { translation: nl },
	pl: { translation: pl },
	'pt-BR': { translation: pt_BR },
	ro: { translation: ro },
	sk: { translation: sk },
	sl: { translation: sl },
	sv: { translation: sv },
	ta: { translation: ta },
	'zh-Hans': { translation: zh_Hans },
	'zh-Hant': { translation: zh_Hant },
	bg: { translation: bg },
	'es-419': { translation: es_419 },
	'es-AR': { translation: es_AR },
	fa: { translation: fa },
	ru: { translation: ru }
};

// Ensure RTL layout is enabled for RTL locales
I18nManager.forceRTL(Localization.isRTL);

i18next
	.use(initReactI18next)
	.init({
		// debug: true,
		fallbackLng: 'en',
		lng: Localization.locale,
		interpolation: {
			escapeValue: false
		},
		resources
	});
