export const onSourceType = (source, config) => {
	switch (source) {
		case "all":
			config = { ...config,
				is_on_source_all: !config.is_on_source_all
			}
			if (config.is_on_source_all) {
				config = {
					...config,
					is_on_source_edam: true,
					is_on_source_internal: true,
					is_on_source_external: true,
					is_on_source_web: true,
					is_on_source_americanfunds_advisor: true,
					is_on_source_americanfunds_ria: true,
					is_on_source_americanfunds_literature: true,
					is_on_source_thecapitalideas: true,
					is_on_source_external: true,
					is_on_source_fundfire: true,
					is_on_source_ignites: true,
					is_on_source_americanfunds_individual: true,
					is_on_source_americanfunds_retirement: true,
					is_on_source_capitalgroup_us: true,
					is_on_source_galileo: true

				}
			} else {
				config = {
					...config,
					is_on_source_internal: false,
					is_on_source_external: false,
					is_on_source_web: false,
					is_on_source_edam: false,
					is_on_source_americanfunds_advisor: false,
					is_on_source_americanfunds_ria: false,
					is_on_source_americanfunds_literature: false,
					is_on_source_thecapitalideas: false,
					is_on_source_external: false,
					is_on_source_fundfire: false,
					is_on_source_ignites: false,
					is_on_source_americanfunds_individual: false,
					is_on_source_americanfunds_retirement: false,
					is_on_source_capitalgroup_us: false,
					is_on_source_galileo: false
				}

			}
			break;
		case "internal":
			config = { ...config,
				is_on_source_internal: !config.is_on_source_internal
			}
			if (config.is_on_source_internal) {
				config = {
					...config,
					is_on_source_web: true,
					is_on_source_edam: true,
					is_on_source_americanfunds_advisor: true,
					is_on_source_americanfunds_ria: true,
					is_on_source_americanfunds_literature: true,
					is_on_source_thecapitalideas: true,
					is_on_source_americanfunds_individual: true,
					is_on_source_americanfunds_retirement: true,
					is_on_source_capitalgroup_us: true,
					is_on_source_galileo: true
				}

			} else {
				config = {
					...config,
					is_on_source_web: false,
					is_on_source_edam: false,
					is_on_source_americanfunds_advisor: false,
					is_on_source_americanfunds_ria: false,
					is_on_source_americanfunds_literature: false,
					is_on_source_thecapitalideas: false,
					is_on_source_americanfunds_individual: false,
					is_on_source_americanfunds_retirement: false,
					is_on_source_capitalgroup_us: false,
					is_on_source_galileo: false
				}

			}
			break;
		case "external":
			config = { ...config,
				is_on_source_external: !config.is_on_source_external
			}
			if (config.is_on_source_external) {
				config = {
					...config,
					is_on_source_fundfire: true,
					is_on_source_ignites: true
				}

			} else {
				config = {
					...config,
					is_on_source_fundfire: false,
					is_on_source_ignites: false
				}
			}
			break;
		case "web":
			config = { ...config,
				is_on_source_web: !config.is_on_source_web
			}
			if (config.is_on_source_web) {
				config = {
					...config,
					is_on_source_americanfunds_advisor: true,
					is_on_source_americanfunds_ria: true,
					is_on_source_americanfunds_literature: true,
					is_on_source_thecapitalideas: true,
					is_on_source_americanfunds_individual: true,
					is_on_source_americanfunds_retirement: true,
					is_on_source_capitalgroup_us: true
				}

			} else {
				config = {
					...config,
					is_on_source_americanfunds_advisor: false,
					is_on_source_americanfunds_ria: false,
					is_on_source_americanfunds_literature: false,
					is_on_source_thecapitalideas: false,
					is_on_source_americanfunds_individual: false,
					is_on_source_americanfunds_retirement: false,
					is_on_source_capitalgroup_us: false
				}

			}
			break;
		case "edam":
			config.is_on_source_edam = !config.is_on_source_edam;
			break;
		case "galileo":
			config.is_on_source_galileo = !config.is_on_source_galileo
			break;
		case "americanfunds_advisor":
			config.is_on_source_americanfunds_advisor = !config.is_on_source_americanfunds_advisor
			break;
		case "americanfunds_ria":
			config.americanfunds_riastate = !config.americanfunds_riastate
			break;
		case "americanfunds_literature":
			config.is_on_source_americanfunds_literature = !config.is_on_source_americanfunds_literature
			break;
		case "thecapitalideas":
			config.is_on_source_thecapitalideas = !config.is_on_source_thecapitalideas
			break;
		case "americanfunds_individual":
			config.is_on_source_americanfunds_individual = !config.is_on_source_americanfunds_individual

			break;
		case "americanfunds_retirement":
			config.is_on_source_americanfunds_retirement = !config.is_on_source_americanfunds_retirement

			break;
		case "capitalgroup_us":
			config.is_on_source_capitalgroup_us = !config.is_on_source_capitalgroup_us

			break;
		case "fundfire":
			config.is_on_source_fundfire = !config.is_on_source_fundfire

			break;
		case "ignites":
			config.is_on_source_ignites = !config.is_on_source_ignites

	}

	if (!config.is_on_source_internal || !config.is_on_source_external) {
		config.is_on_source_all = false;
	}
	if (config.is_on_source_internal && config.is_on_source_external) {
		config.is_on_source_all = true;
	}

	if (!config.is_on_source_edam || !config.is_on_source_web || !config.is_on_source_galileo) {
		config.is_on_source_internal = false;
		config.is_on_source_all = false
	}
	if (config.is_on_source_edam && config.is_on_source_web && config.is_on_source_galileo) {
		config.is_on_source_internal = true;
	}


	if (!config.is_on_source_americanfunds_advisor || !config.is_on_source_americanfunds_ria || !config.is_on_source_americanfunds_literature || !config.is_on_source_thecapitalideas ||
		!config.is_on_source_americanfunds_individual || !config.is_on_source_americanfunds_retirement || !config.is_on_source_capitalgroup_us) {
		config.is_on_source_web = false;
		config.is_on_source_internal = false;
		config.is_on_source_all = false;
	}

	if (config.is_on_source_americanfunds_advisor && config.is_on_source_americanfunds_ria && config.is_on_source_americanfunds_literature && config.is_on_source_thecapitalideas &&
		config.is_on_source_americanfunds_individual && config.is_on_source_americanfunds_retirement && config.is_on_source_capitalgroup_us) {
		config.is_on_source_web = true;
	}


	if (!config.is_on_source_fundfire || !config.is_on_source_ignites) {
		config.is_on_source_external = false;
		config.is_on_source_all = false;
	}
	if (config.is_on_source_fundfire && config.is_on_source_ignites) {
		config.is_on_source_external = true;
	}
	return config;
}
export const onFileType = (type, config) => {
	switch (type) {
		case "all":
			config.is_on_file_type_all = !config.is_on_file_type_all;
			if (config.is_on_file_type_all) {
				config.is_on_file_type_pdf = true;
				config.is_on_file_type_image = true;
				config.is_on_file_type_chart = true;
				config.is_on_file_type_html = true;
				config.is_on_file_type_video = true;
				config.is_on_file_type_word = true;
				config.is_on_file_type_presentation = true;
				config.is_on_file_type_indd = true;
			} else {
				config.is_on_file_type_pdf = false;
				config.is_on_file_type_image = false;
				config.is_on_file_type_chart = false;
				config.is_on_file_type_html = false;
				config.is_on_file_type_video = false;
				config.is_on_file_type_word = false;
				config.is_on_file_type_presentation = false;
				config.is_on_file_type_indd = false;
			}
			break;
		case "pdf":
			config.is_on_file_type_pdf = !config.is_on_file_type_pdf;
			break;
		case "image":
			config.is_on_file_type_image = !config.is_on_file_type_image;
			break;
		case "chart":
			config.is_on_file_type_chart = !config.is_on_file_type_chart;
			break;
		case "html":
			config.is_on_file_type_html = !config.is_on_file_type_html;
			break;
		case "video":
			config.is_on_file_type_video = !config.is_on_file_type_video;
			break;
		case "word":
			config.is_on_file_type_word = !config.is_on_file_type_word;
			break;
		case "presentation":
			config.is_on_file_type_presentation = !config.is_on_file_type_presentation;
			break;
		case "indd":
			config.is_on_file_type_indd = !config.is_on_file_type_indd;
			break;
	}

	if (
		config.is_on_file_type_pdf &&
		config.is_on_file_type_image &&
		config.is_on_file_type_chart &&
		config.is_on_file_type_html &&
		config.is_on_file_type_video &&
		config.is_on_file_type_word &&
		config.is_on_file_type_presentation &&
		config.is_on_file_type_indd
	) {
		config.is_on_file_type_all = true;
	}

	if (
		!config.is_on_file_type_pdf ||
		!config.is_on_file_type_image ||
		!config.is_on_file_type_chart ||
		!config.is_on_file_type_html ||
		(!config.is_on_file_type_video &&
			!config.is_on_file_type_word) ||
		!config.is_on_file_type_presentation ||
		!config.is_on_file_type_indd
	) {
		config.is_on_file_type_all = false;
	}
	return config;
}
export const getFileType = (config) => {
	let arr = [];
	if (config.is_on_file_type_all) {
		arr.push("all");
		return arr;
	}
	if (config.is_on_file_type_pdf) {
		arr.push("pdf");
	}
	if (config.is_on_file_type_image) {
		arr.push("image");
	}
	if (config.is_on_file_type_chart) {
		arr.push("chart");
	}
	if (config.is_on_file_type_html) {
		arr.push("html");
	}
	if (config.is_on_file_type_video) {
		arr.push("video");
	}
	if (config.is_on_file_type_word) {
		arr.push("word");
	}
	if (config.is_on_file_type_presentation) {
		arr.push("presentation");
	}
	if (config.is_on_file_type_indd) {
		arr.push("indd");
	}
	return arr;
}
export const getSourceType = (config) => {
	let arr = [];
	if (config.is_on_source_all) {
		arr.push("all");
		return arr;
	}
	if (config.is_on_source_internal) {
		arr.push("internal");
	}
	if (!config.is_on_source_internal && config.is_on_source_edam) {
		arr.push("edam");
	}
	if (!config.is_on_source_internal && config.is_on_source_web) {
		arr.push("web");
	}
	if (
		!config.is_on_source_internal &&
		config.is_on_source_galileo
	) {
		arr.push("galileo");
	}
	if (
		!config.is_on_source_internal &&
		!config.is_on_source_web &&
		config.is_on_source_americanfunds_advisor
	) {
		arr.push("americanfunds_advisor");
	}
	if (
		!config.is_on_source_internal &&
		!config.is_on_source_web &&
		config.is_on_source_americanfunds_ria
	) {
		arr.push("americanfunds_ria");
	}
	if (
		!config.is_on_source_internal &&
		!config.is_on_source_web &&
		config.is_on_source_americanfunds_literature
	) {
		arr.push("americanfunds_literature");
	}
	if (
		!config.is_on_source_internal &&
		!config.is_on_source_web &&
		config.is_on_source_americanfunds_individual
	) {
		arr.push("americanfunds_individual");
	}
	if (
		!config.is_on_source_internal &&
		!config.is_on_source_web &&
		config.is_on_source_americanfunds_retirement
	) {
		arr.push("americanfunds_retirement");
	}
	if (
		!config.is_on_source_internal &&
		!config.is_on_source_web &&
		config.is_on_source_capitalgroup_us
	) {
		arr.push("capitalgroup_us");
	}
	if (
		!config.is_on_source_internal &&
		!config.is_on_source_web &&
		config.is_on_source_thecapitalideas
	) {
		arr.push("thecapitalideas");
	}

	if (config.is_on_source_external) {
		arr.push("external");
	}

	if (
		!config.is_on_source_external &&
		config.is_on_source_fundfire
	) {
		arr.push("fundfire");
	}
	if (
		!config.is_on_source_external &&
		config.is_on_source_ignites
	) {
		arr.push("ignites");
	}

	return arr;
}
export const setFilter = (config,data) =>{
	if (data.time_filter_value > 6) {
		data.timeType = "Y";
	} else {
		data.timeType = "M";
	}

	if (data && data.file_type) {
		config.is_on_file_type_all = false;
		config.is_on_file_type_pdf = false;
		config.is_on_file_type_image = false;
		config.is_on_file_type_chart = false;
		config.is_on_file_type_html = false;
		config.is_on_file_type_video = false;
		config.is_on_file_type_word = false;
		config.is_on_file_type_presentation = false;
		config.is_on_file_type_indd = false;

		data.file_type.forEach(type => {
			switch (type) {
				case "all":
					config.is_on_file_type_all = false;
					config = onFileType("all",config);
					break;
				case "pdf":
					config.is_on_file_type_pdf = true;
					break;
				case "image":
					config.is_on_file_type_image = true;
					break;
				case "chart":
					config.is_on_file_type_chart = true;
					break;
				case "html":
					config.is_on_file_type_html = true;
					break;
				case "video":
					config.is_on_file_type_video = true;
					break;
				case "word":
					config.is_on_file_type_word = true;
					break;
				case "presentation":
					config.is_on_file_type_presentation = true;
					break;
				case "indd":
					config.is_on_file_type_indd = true;
					break;
			}
		});
	}

	if (data && data.source) {
		config.is_on_source_all = false;
		config.is_on_source_internal = false;
		config.is_on_source_external = false;
		config.is_on_source_edam = false;
		config.is_on_source_web = false;
		config.is_on_source_americanfunds_advisor = false;
		config.is_on_source_americanfunds_ria = false;
		config.is_on_source_americanfunds_literature = false;
		config.is_on_source_thecapitalideas = false;
		config.is_on_source_fundfire = false;
		config.is_on_source_ignites = false;
		config.is_on_source_americanfunds_individual = false;
		config.is_on_source_americanfunds_retirement = false;
		config.is_on_source_capitalgroup_us = false;
		config.is_on_source_galileo = false;

		data.source.forEach(source => {
			switch (source) {
				case "all":
					config.is_on_source_all = true;
					config.is_on_source_internal = true;
					config.is_on_source_external = true;
					config.is_on_source_web = true;
					config.is_on_source_edam = true;
					config.is_on_source_americanfunds_advisor = true;
					config.is_on_source_americanfunds_ria = true;
					config.is_on_source_americanfunds_literature = true;
					config.is_on_source_thecapitalideas = true;
					config.is_on_source_external = true;
					config.is_on_source_fundfire = true;
					config.is_on_source_ignites = true;
					config.is_on_source_americanfunds_individual = true;
					config.is_on_source_americanfunds_retirement = true;
					config.is_on_source_capitalgroup_us = true;
					config.is_on_source_galileo = true;
					break;
				case "internal":
					config.is_on_source_internal = true;
					config.is_on_source_web = true;
					config.is_on_source_edam = true;
					config.is_on_source_americanfunds_advisor = true;
					config.is_on_source_americanfunds_ria = true;
					config.is_on_source_americanfunds_literature = true;
					config.is_on_source_thecapitalideas = true;
					config.is_on_source_americanfunds_individual = true;
					config.is_on_source_americanfunds_retirement = true;
					config.is_on_source_capitalgroup_us = true;
					break;
				case "external":
					config.is_on_source_external = true;
					config.is_on_source_fundfire = true;
					config.is_on_source_ignites = true;
					break;
				case "web":
					config.is_on_source_web = true;
					config.is_on_source_americanfunds_advisor = true;
					config.is_on_source_americanfunds_ria = true;
					config.is_on_source_americanfunds_literature = true;
					config.is_on_source_thecapitalideas = true;
					config.is_on_source_americanfunds_individual = true;
					config.is_on_source_americanfunds_retirement = true;
					config.is_on_source_capitalgroup_us = true;
					break;
				case "edam":
					config.is_on_source_edam = true;
					break;
				case "galileo":
					config.is_on_source_galileo = true;
					break;
				case "americanfunds_advisor":
					config.is_on_source_americanfunds_advisor = true;
					break;
				case "americanfunds_ria":
					config.is_on_source_americanfunds_ria = true;
					break;
				case "americanfunds_literature":
					config.is_on_source_americanfunds_literature = true;
					break;

				case "americanfunds_individual":
					config.is_on_source_americanfunds_individual = true;
					break;
				case "americanfunds_retirement":
					config.is_on_source_americanfunds_retirement = true;
					break;
				case "capitalgroup_us":
					config.is_on_source_capitalgroup_us = true;
					break;
				case "thecapitalideas":
					config.is_on_source_thecapitalideas = true;
					break;
				case "fundfire":
					config.is_on_source_fundfire = true;
					break;
				case "ignites":
					config.is_on_source_ignites = true;
					break;
			}
		});
	}
	return config
}
export const resetFilters =(config)=>{

 config.is_on_file_type_all = false;
 config.is_on_file_type_pdf = false;
 config.is_on_file_type_image = false;
 config.is_on_file_type_chart = false;
 config.is_on_file_type_html  = false;
 config.is_on_file_type_video = false;
 config.is_on_file_type_word = false;
 config.is_on_file_type_presentation  = false;
 config.is_on_file_type_indd = false;

 config.is_on_source_all = false;
 config.is_on_source_internal = false;
 config.is_on_source_external = false;
 config.is_on_source_edam = false;
 config.is_on_source_web = false;
 config.is_on_source_americanfunds_advisor = false;
 config.is_on_source_americanfunds_ria = false;
 config.is_on_source_americanfunds_literature = false;
 config.is_on_source_thecapitalideas = false;
 config.is_on_source_fundfire = false;
 config.is_on_source_ignites = false;
 config.is_on_source_americanfunds_individual = false;
 config.is_on_source_americanfunds_retirement = false;
 config.is_on_source_capitalgroup_us = false;
 config.is_on_source_galileo = false;
	return config;
}