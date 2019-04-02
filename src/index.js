import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList";

addLocaleData(esLocaleData, enLocaleData);

const messages = {
    'es': localeEsMessages,
    'en': localeEnMessages
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
	<IntlProvider locale={language} messages={messages[language]}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);