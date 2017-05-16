import React, { Component} from "react";

class Popular extends Component {
	constructor (props){
		super(props);
		this.state = {
			selectedLangauge : 'All'
		};

		this.updateLang = this.updateLang.bind(this);
	}

	updateLang(lang) {
		this.setState(()=>{
			return {
				selectedLangauge:lang
			}
		})
	}
	render() {
		var langs = ['All', 'Javascript', 'Java', '.Net', 'Python', 'Ruby'];
		return (
			<ul className="langs">
			
				{
					langs.map((lang) => {
						return (
							<li style={ lang === this.state.selectedLangauge ? {color:'#d0021b'} : null}
							onClick={this.updateLang.bind(null, lang)} key={lang}>
								{lang}
							</li>
						)
					})
				}
			</ul>
		)
	}
}

module.exports = Popular;