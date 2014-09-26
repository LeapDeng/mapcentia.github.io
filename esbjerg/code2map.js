var code2map = {};
code2map.dict = {
    "affanl": "theme-v1_KP14_BE_AFFALDSANLAEG",
    "audd": "theme-v1_KP14_BE_ANDENUDDANNELSE",
    "bebindp": "theme-v1_KP14_BE_BEBYGGELSENS_INDPASNING",
    "bib": "theme-v1_KP14_BE_BIBLIOTEK",
    "biog": "theme-v1_KP14_BE_BIOGASANLAEG_pkt",
    "bsejl": "theme-v1_KP14_BE_BRAETSEJLADS",
    "bs": "theme-v1_KP14_BE_BUTIK_I_STUEETAGE",
    "rby": "theme-v1_KP14_BE_BYFORMAAL",
    "bk": "theme-v1_KP14_BE_BYGNINGSKULTUR",
    "camp": "theme-v1_KP14_BE_CAMPINGPLADS",
    "cia": "theme-v1_KP14_BE_CENTRALEIDRAETSANLAEG",
    "dagin": "theme-v1_KP14_BE_DAGINSTITUTIONER",
    "depo": "theme-v1_KP14_BE_DEPONI",
    "dhavn": "theme-v1_KP14_BE_DOKHAVN",
    "domi": "theme-v1_KP14_BE_DOMICILBYGGERI",
    "feriec": "theme-v1_KP14_BE_FERIECENTER",
    "frihus": "theme-v1_KP14_BE_FRITIDSHUSE",
    "fyvl": "theme-v1_KP14_BE_FYRVAERKERILAGER",
    "godst": "theme-v1_KP14_BE_GODSTERMINAL",
    "golfbo": "theme-v1_KP14_BE_GOLFBANE_MED_BOLIGER",
    "golf": "theme-v1_KP14_BE_GOLFBANER",
    "grn": "theme-v1_KP14_BE_GRONNING",
    "helbo": "theme-v1_KP14_BE_HELAARSBOLIGER",
    "hospt": "theme-v1_KP14_BE_HOSPITAL",
    "hot": "theme-v1_KP14_BE_HOTEL",
    "jstat": "theme-v1_KP14_BE_JERNBANESTATION",
    "kirke": "theme-v1_KP14_BE_KIRKE",
    "kirkg": "theme-v1_KP14_BE_KIRKEGAARD",
    "kulhu": "theme-v1_KP14_BE_KULTURHUSE",
    "kurund": "theme-v1_KP14_BE_KURSUSOGUNDERVISN",
    "lhavn": "theme-v1_KP14_BE_LUFTHAVN",
    "lbh": "theme-v1_KP14_BE_LYSTBAADEHAVN",
    "markpl": "theme-v1_KP14_BE_MARKEDSPLADS",
    "mots": "theme-v1_KP14_BE_MOTORSPORT",
    "museum": "theme-v1_KP14_BE_MUSEUM",
    "musp": "theme-v1_KP14_BE_MUSEUMSPARKERING",
    "muta": "theme-v1_KP14_BE_MUSIKOGTEATER",
    "ngst": "theme-v1_KP14_BE_NATURGASSTATIONER",
    "nkfc": "theme-v1_KP14_BE_NATURKULTURFORMIDLINGSCENTER",
    "ophpl": "theme-v1_KP14_BE_OPHALERPLADS",
    "park": "theme-v1_KP14_BE_PARK",
    "pka": "theme-v1_KP14_BE_PARKERINGSAREAL",
    "pv": "theme-v1_KP14_BE_PLADSKRAEV_VARER",
    "pl_zone": "theme-v1_KP14_BE_PLANLAGTZONE",
    "rens": "theme-v1_KP14_BE_RENSNINGSANLAEG",
    "rdepo": "theme-v1_KP14_BE_BE_RESERVERETDEPONI",
    "rest": "theme-v1_KP14_BE_BE_RESTAURANT",
    "ride": "theme-v1_KP14_BE_RIDECENTER",
    "risk": "theme-v1_KP14_BE_RISIKOERHVERV",
    "ræk": "theme-v1_KP14_BE_RAEKKEFOELGE",
    "skole": "theme-v1_KP14_BE_SKOLE",
    "skyd": "theme-v1_KP14_BE_SKYDEBANE",
    "socialt": "theme-v1_KP14_BE_SOCIALETILBUD",
    "spvanl": "theme-v1_KP14_BE_SPILDEVANDSANLAEG",
    "spilst": "theme-v1_KP14_BE_SPILLESTED",
    "spor": "theme-v1_KP14_BE_SPORBETJENING",
    "stud": "theme-v1_KP14_BE_ST_UDVALGSVAREBUTIKKER",
    "kl4stv": "theme-v1_KP14_BE_KL4_STOJBELASTETVEJE",
    "stv": "theme-v1_KP14_BE_STOJBELASTEDEVEJE_RAMMER",
    "svva": "theme-v1_KP14_BE_SVOEMMEHAL_VANDLAND",
    "tof": "theme-v1_KP14_BE_TRAFIKFAERGEHAVN",
    "trafc": "theme-v1_KP14_BE_TRAFIKCENTER",
    "transf": "theme-v1_KP14_BE_TRANSFORMER",
    "vandv": "theme-v1_KP14_BE_VANDVAERK",
    "varmv": "theme-v1_KP14_BE_VARMEVAERK",
    "vejvind": "theme-v1_KP14_BE_VEJADGANG_VINDMOLLER",
    "vm": "theme-v1_KP14_BE_VINDMOLLE",
    "estrand": "theme-v1_KP14_BE_VVM_ANLAEG",
    "helikop": "theme-v1_KP14_BE_VVM_ANLAEG",
    "kokro": "theme-v1_KP14_BE_VVM_ANLAEG",
    "osth": "theme-v1_KP14_BE_VVM_ANLAEG",
    "sbiokor": "theme-v1_KP14_BE_VVM_ANLAEG",
    "senst": "theme-v1_KP14_BE_VVM_ANLAEG",
    "shop": "theme-v1_KP14_BE_VVM_ANLAEG",
    "svmade": "theme-v1_KP14_BE_VVM_ANLAEG",
    "aeldins": "theme-v1_KP14_BE_AELDRECENTRE",
    "b_marsk": "theme-v1_KP14_BI_BEBYGGELSE_I_MARSKEN",
    "r_do": "theme-v1_KP14_BI_BEGRAENSET_DRIKKEVANDSINTERES",
    "b_bygskik": "theme-v1_KP14_BI_BYGGESKIK_OG_BEBYGGELSESFORHOLD",
    "t_elspor": "theme-v1_KP14_BI_EL_JERNBANEDRIFT",
    "b_ex": "theme-v1_KP14_BI_EXNERSFREDNING",
    "t_fjv": "theme-v1_KP14_BI_FJERNVARMELEDNING",
    "b_fa": "theme-v1_KP14_BI_FORSVARETSAREALER",
    "t_olie": "theme-v1_KP14_BI_FORSVAR_OLIELEDNING_LINE",
    "b_fmbesk": "theme-v1_KP14_BI_FREDETFORTIDSMINDER",
    "b_fred": "theme-v1_KP14_BI_FREDNING",
    "b_skf": "theme-v1_KP14_BI_FREDSKOV",
    "t_fyrl": "theme-v1_KP14_BI_FYRLINIE",
    "b_geo": "theme-v1_KP14_BI_GEOLOGISBE_KVAERDI",
    "r_vo": "theme-v1_KP14_BI_GRUNDVANDSBESKYTOMR",
    "b_havd": "theme-v1_KP14_BI_HAVDIGE",
    "b_khm": "theme-v1_KP14_BI_HISTORISKLANDSKAB",
    "t_aff": "theme-v1_KP14_BI_HOVEDKLOAKLEDNING",
    "t_hsti": "theme-v1_KP14_BI_HOVEDSTIFORBINDELSER",
    "t_hvl": "theme-v1_KP14_BI_HOVEDVANDLEDNING",
    "t_hl": "theme-v1_KP14_BI_HOJSPAENDINGSKORRIDOR",
    "db_jb": "theme-v1_KP14_BI_ISO_JERNBANE",
    "db_lh": "theme-v1_KP14_BI_ISO_LUFTHAVN",
    "db_mb": "theme-v1_KP14_BI_ISO_MOTORBANE",
    "db_sk": "theme-v1_KP14_BI_ISO_SKYDEBANE",
    "db_vej": "theme-v1_KP14_BI_ISO_VEJ",
    "db_vejk": "theme-v1_KP14_BI_ISO_VEJKANT",
    "db_vind": "theme-v1_KP14_BI_ISO_VINDMOLLE",
    "db_virk": "theme-v1_KP14_BI_ISO_VIRKSOMHED",
    "t_jbt": "theme-v1_KP14_BI_JERNBANETRACE",
    "b_jordfu": "theme-v1_KP14_BI_JORDFORURENING",
    "r_vk": "theme-v1_KP14_BI_KILDEPLADSZONER",
    "b_kibesk": "theme-v1_KP14_BI_KIRKEBYGGELINIER",
    "b_ko": "theme-v1_KP14_BI_KIRKEOMGIVELSER",
    "b_klitfr": "theme-v1_KP14_BI_KLITFREDNING",
    "r_rk": "theme-v1_KP14_BI_KLAEGINTERESSE",
    "b_kvf": "theme-v1_KP14_BI_KOLLEKTIVVARMEFORSYNING",
    "b_ka": "theme-v1_KP14_BI_KULTURARVSLEVN",
    "b_atl": "theme-v1_KP14_BI_KULTURMILJO",
    "b_kyst": "theme-v1_KP14_BI_KYSTNAERHEDSZONE",
    "b_lkaro": "theme-v1_KP14_BI_LANDSKABSKARAKTEROMR",
    "b_lav": "theme-v1_KP14_BI_LAVBUNDSAREALER",
    "m_hg": "theme-v1_KP14_BI_LUFTHGRAENSEPLAN",
    "b_int": "theme-v1_KP14_BI_NATURA2000",
    "t_gas": "theme-v1_KP14_BI_NATURGAS_LINE",
    "b_P3besk": "theme-v1_KP14_BI_P3_BESKYTTELSE",
    "b_pzrivi": "theme-v1_KP14_BI_PLANZONE_RISIKOVIRKSOMHED",
    "b_pona": "theme-v1_KP14_BI_POTENTIEL_NATUR",
    "t_vej": "theme-v1_KP14_BI_PRIMAERVEJE",
    "b_resvej": "theme-v1_KP14_BI_BE_RESVEJ",
    "t_ra": "theme-v1_KP14_BI_RADIOKAEDE",
    "r_rg": "theme-v1_KP14_BI_RAASTOFGRAVEOMR",
    "r_ri": "theme-v1_KP14_BI_RAASTOFINTEBE_RESSE",
    "b_sbyg": "theme-v1_KP14_BI_SAMMENHAENG_BEBYGGELSE",
    "b_szrivi": "theme-v1_KP14_BI_SIKKERZONE_RISIKOVIRKSOMHED",
    "b_sk": "theme-v1_KP14_BI_SKOV",
    "b_skbesk": "theme-v1_KP14_BI_SKOVBYGGELINIER",
    "b_skj": "theme-v1_KP14_BI_SKOVREJSNING",
    "b_sk0": "theme-v1_KP14_BI_SKOVREJSNING_UONSKET",
    "b_sjd": "theme-v1_KP14_BI_STEN_JORDDIGER",
    "b_shd": "theme-v1_KP14_BI_STORE_HUSDYRBRUGSOMR",
    "b_sshl": "theme-v1_KP14_BI_ST_SAMMENHAENGENDE_LANDSKABER",
    "b_stl": "theme-v1_KP14_BI_ST_UFORSTYR_LANDSKABER",
    "b_stbesk": "theme-v1_KP14_BI_STRANDBESKYTTELSE",
    "b_svls": "theme-v1_KP14_BI_SAERL_VAERDIF_LANDBRUGSOMR",
    "b_sobesk": "theme-v1_KP14_BI_SOEBESKYTTELSE",
    "ter_kot3": "theme-v1_KP14_BI_TERRAENKOTE_NY_BEBYG",
    "ter_kot4": "theme-v1_KP14_BI_TERRAENKOTE_NY_BEBYG",
    "b_dekl": "theme-v1_KP14_BI_TINGLYST_BEVARINGS_DEKLARATION",
    "b_vahafr": "theme-v1_KP14_BI_VADEHAVSFREDNING",
    "b_ls": "theme-v1_KP14_BI_VAERDIF_LANDSKABER",
    "b_vbgr": "theme-v1_KP14_BI_VAERDIFBYRUM",
    "b_lb": "theme-v1_KP14_BI_VAERDIF_LANDBRUGSOMR",
    "b_aabesk": "theme-v1_KP14_BI_AABESKYTTELSE"
}
window.__code2map = function (string) {
    if (code2map.dict[string]) {
        return code2map.dict[string];
    }
    return null;
};