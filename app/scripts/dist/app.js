webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(32);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(52);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Header = __webpack_require__(88);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Job = __webpack_require__(89);
	
	var _Job2 = _interopRequireDefault(_Job);
	
	var _experience = __webpack_require__(87);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var App = _react2.default.createClass({
	  displayName: 'Resume',
	
	  render: function render() {
	    var _renderJob = function _renderJob(job, index) {
	      return _react2.default.createElement(_Job2.default, { key: index, job: job });
	    };
	
	    return _react2.default.createElement(
	      'div',
	      { id: 'content' },
	      _react2.default.createElement(_Header2.default, null),
	      _experience.experience.map(_renderJob)
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('resumeApp'));

/***/ },

/***/ 87:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var experience = exports.experience = [{
	  employer: "BoomTown",
	  link: "http://www.boomtownroi.com",
	  location: "Charleston, SC",
	  title: "Senior Software Engineer",
	  start: "July 2014",
	  end: "February 2016",
	  skills: ["Design, develop, implement real estate web applications, focusing on user interface, user experience", "Use JavaScript, Angular, jQuery Mobile, Mustache, Less, and HTML/CSS languages, markup and frameworks", "Use Behavior and Test Driven Design principles, in a Khan Bhan workflow", "Version control system set up and maintenance, using Git"],
	  technologies: [],
	  projects: [{
	    title: "BoomTown LMS",
	    description: "Lead managment system and contact relationship managment system for real estate brokers and agents"
	  }, {
	    title: "Boomstrap",
	    description: "Bootstrap based component and pattern library"
	  }] }, {
	  employer: "Benefitfocus",
	  link: '',
	  location: "Charleston, SC",
	  title: "Interaction Engineer",
	  start: "September 2013",
	  end: "June 2014",
	  skills: ["Design, develop, implement HIPPA-compliant healthcare web applications, including User Interface, User Experience, and Administration", "Implement carrier specific private label branding to white lable platform applications", "Use JavaScript, Nodejs, Backbonejs, Dustjs, Less, and HTML/CSS languages, markup and frameworks", "Use Behavior and Test Driven Design principles, in an Agile workflow", "Version control system set up and maintenance, using Git"],
	  technologies: [],
	  projects: [{
	    title: "Group Shopping",
	    description: "Marketplace for a representative of a business to shop for group insurance plance to offer their employees"
	  }, {
	    title: "eDirect",
	    description: "Marketplace for an individual to purchase private insurance direct from carriers, or ACA complaint marketplace"
	  }] }, {
	  employer: "Jack Russell Software",
	  link: '',
	  division: "CareKinesis",
	  location: "Mount Pleasant, SC",
	  title: "Programmer/Analyst",
	  start: "December 2011",
	  end: "August 2013",
	  skills: ["Design, develop, implement HIPPA-compliant healthcare web applications, including User Interface, User Experience, Data Storage, and Administration", "Use Ruby, Ruby on Rails, HAML/SASS, CoffeeScript, JavaScript, AngularJS, and HTML/CSS languages, markup and frameworks", "MySQL, CouchDB, MongoDB data-stores", "Use Behavior and Test Driven Design principles, in an Agile workflow", "Version control system set up and maintenance, using Git"],
	  technologies: [],
	  projects: [{
	    title: "EireneRx",
	    description: "Medication Management and ePrescribing for the Elderly",
	    link: "http://www.eirenerx.com"
	  }, {
	    title: "Adherance"
	  }, {
	    title: "NiaRx",
	    description: "eHR Web Application for Pharmacy Students and Pharmacists",
	    link: "http://www.niarx.com"
	  }, {
	    title: "CareTransitions",
	    description: "Patient Care Transition Management"
	  }] }, {
	  employer: "Greulich Online",
	  link: '',
	  location: "Charleston, SC",
	  title: "Web Developer/Owner",
	  start: "January 2008",
	  end: "Current",
	  skills: ["Design, develop, implement, and maintain web sites and web applications, including User Interface, User Experience, Data Storage, and Administration", "Use Ruby, HTML/HAML, SASS/CSS, Coffeescript/JavaScript, PHP, ASP.Net, C# and Java Server Pages (JSP) languages and markup", "Use Rails, Nodejs, Angularjs, Backbonejs, jQuery, jQuery-ui, Underscore libraries and frameworks", "Use MySQL, PostgreSQL, and MS SQL Server 2005 data-stores", "Design and develop Wordpress themes and plug-ins", "Manage Google Ad-Words campaigns", "Technical and 'How-to' document creation"],
	  technologies: [],
	  projects: [{
	    title: "Angular Character Limit",
	    description: "Angularjs directive to limit the number of characters allowed in a text field",
	    link: "http://igreulich.github.io/angular-charlimit/"
	  }, {
	    title: "Angular Truncate",
	    description: "An angular filter to truncate strings.",
	    link: "http://igreulich.github.io/angular-truncate/"
	  }, {
	    title: "Angular Typeahead",
	    description: "Angularjs directive to use Twitter's Bootstrap Typeahead plugin",
	    link: "http://igreulich.github.io/angular-typeahead/"
	  }, {
	    title: "Ticket to Ride Counter",
	    description: "A point calculator for the Ticket to Ride boardgame",
	    link: "http://www.t2r-counter.com/"
	  }, {
	    title: "Kardashian Counter",
	    description: "Kardasian anniversary calculator",
	    link: "https://kardashian-anniversary.heroku.com/"
	  }, {
	    title: "Sing",
	    description: "Rails-like generator for Sinatra apps",
	    link: "http://igreulich.github.io/sing/"
	  }, {
	    title: "Sports Bingo",
	    description: "A sports based, and themed, real-time bingo game",
	    link: "http://playsportsbingo.com/"
	  }, {
	    title: "Tim Larkin for Congress",
	    description: "Campaign website for Tim Larkin for Congress",
	    link: "https://larkin-congress.herokuapp.com/"
	  }] }, {
	  employer: "Evening Post Interactive",
	  link: '',
	  division: "Evening Post Publishing, The Post and Courier",
	  location: "Charleston, SC",
	  title: "Project Manager",
	  start: "April 2010",
	  end: "Decemeber 2011",
	  skills: ["Design, develop, implement, and maintain web sites including User Interface, User Experience, and Administration", "Use HTML/CSS, JavaScript and PHP languages and markup", "Use jQuery, and jQuery-ui libraries", "Use MediaSpan, Ellington, and Wordpress content management systems", "Develop themes for special sections of the Post and Courier, and the Evening Post Publishing properties", "Technical and 'How-to' document creation", "Work with 3rd party vendors to ensure standards and best best practices are maintained, and deadlines are met", "Work with staff of Post and Courier in the development of new sections, and redevelopment of existing sections", "Oversee development team, assign projects, and time-lines", "Coordinate projects across multiple vendors, both internal and external"],
	  technologies: [],
	  projects: [{
	    title: "The Post and Courier",
	    description: "The Post and Courier Newspaper Website",
	    link: "http://www.postandcourier.com"
	  }, {
	    title: "The Charleston Scene",
	    description: "The Website for The Charleston Scene",
	    link: "http://charlestonscene.com"
	  }, {
	    title: "Lowcountry Parent",
	    description: "The Charleston Area's No. 1 Parenting Resource",
	    link: "http://www.lowcountryparent.com"
	  }, {
	    title: "Lowcountry Classifieds",
	    description: "Find it. Search the Classifieds for Anything in the Charleston Area",
	    link: "http://www.lowcountryclassifieds.com/"
	  }, {
	    title: "North Charleston Magazine",
	    description: "North Charleston Magazine Website",
	    link: "http://www.postandcourier.com/apps/pbcs.dll/section?category=nc"
	  }, {
	    title: "My Charleston Magazine",
	    description: "The Post and Courier's Guide to Life in the Lowcountry",
	    link: "http://www.mycharlestononline.com/"
	  }, {
	    title: "Tideline Magazine",
	    description: "Charleston's Premier Maritime Publication",
	    link: "http://www.tidelinemagazine.com/"
	  }, {
	    title: "The Eagle",
	    description: "The Bryan-College Station Eagle Website",
	    link: "http://www.theeagle.com/"
	  }, {
	    title: "Aggie Sports",
	    description: "The Aggie Sports Website",
	    link: "http://www.aggiesports.com/"
	  }, {
	    title: "Brazos Sports",
	    description: "The Brazos Sports Website",
	    link: "http://www.brazossports.com/"
	  }, {
	    title: "The Salisbury Post",
	    description: "The Salisbury Post Website",
	    link: "http://www.salisburypost.com/"
	  }, {
	    title: "Farm Carolina",
	    description: "Garden, Food and More",
	    link: "http://www.farmcarolina.com/"
	  }, {
	    title: "Aiken Standard",
	    description: "The Aiken Standard Website",
	    link: "http://www.aikenstandard.com/"
	  }, {
	    title: "The Star",
	    description: "The North Agusta Star Website",
	    link: "http://www.aikenstandard.com/"
	  }, {
	    title: "Summerville Journal Scene",
	    description: "The Summervile Journal Scene Website",
	    link: "http://www.journalscene.com/"
	  }, {
	    title: "The Berkeley Independant",
	    description: "The Berkeley Independant Website",
	    link: "http://www.berkeleyind.com/"
	  }, {
	    title: "The Gazette",
	    description: "The Goose Creek Gazette Website",
	    link: "http://www.ourgazette.com/"
	  }, {
	    title: "Moultrie News",
	    description: "The Moultrie News Website",
	    link: "http://www.moultrienews.com/"
	  }, {
	    title: "The News",
	    description: "Making a Difference, Once Week at a Time",
	    link: "http://www.kingstreenews.com/"
	  }, {
	    title: "The Georgetown Times",
	    description: "The Georgetown Times Website",
	    link: "http://www.gtowntimes.com/"
	  }, {
	    title: "Waccamaw Times",
	    description: "The Waccamaw Times Website",
	    link: "http://www.waccamawtimes.com/"
	  }, {
	    title: "Davie County Enterprise Record",
	    description: "The Davie County Enterprise Record Website",
	    link: "http://www.ourdavie.com/"
	  }, {
	    title: "The Clemmons Courier",
	    description: "The Clemmons Courier Website",
	    link: "http://www.clemmonscourier.net/"
	  }] }, {
	  employer: "Leveraged Media",
	  link: '',
	  location: "Columbia, SC",
	  title: "Web Developer",
	  start: "October 2009",
	  end: "March 2010",
	  skills: ["Developed and implemented a web-hosting system based on Wordpress MU, including User Interface, User Experience, Data Storage, and Administration", "Use HTML/CSS, JavaScript, Java Server Pages (JSP), PHP, languages and markup", "Developed themes for client web sites", "Developed proprietary plug-ins for Wordpress MU", "Server setup and maintenance", "Technical and 'How-to' document creation", "Use MySQL data-store"],
	  technologies: [] }, {
	  employer: "University of South Carolina",
	  link: '',
	  location: "Columbia, SC",
	  title: "Research Assistant",
	  start: "June 2009",
	  end: "September 2009",
	  skills: ["Design, develop, and implement the Virtual Test Bed website", "Use HTML/CSS, JavaScript, ASP.Net, C# languages and markup", "Use MS SQL Server data-store", "Use Visual Studio Pro 2008 and Expressions Studio development environments"],
	  technologies: [],
	  projects: [{
	    title: "Virtual Test Bed",
	    description: "Virtual Test Bed; A Virtual Prototyping Solution for Large Scale, Multi-Disciplined Dynamic Systems",
	    link: "http://vtb.engr.sc.edu/vtbwebsite/#/Overview"
	  }] }];

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(32);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'Header',
	
	  render: function render() {
	    return _react2.default.createElement(
	      'header',
	      { className: 'header' },
	      _react2.default.createElement(
	        'div',
	        { className: 'name' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Ian Greulich'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'description' },
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Web Developer'
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(32);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _CompanyCard = __webpack_require__(161);
	
	var _CompanyCard2 = _interopRequireDefault(_CompanyCard);
	
	var _SkillsCard = __webpack_require__(162);
	
	var _SkillsCard2 = _interopRequireDefault(_SkillsCard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'Experience Section',
	
	  render: function render() {
	    var _props$job = this.props.job;
	    var employer = _props$job.employer;
	    var link = _props$job.link;
	    var title = _props$job.title;
	    var skills = _props$job.skills;
	    var start = _props$job.start;
	    var end = _props$job.end;
	    var projects = _props$job.projects;
	    var technologies = _props$job.technologies;
	
	
	    return _react2.default.createElement(
	      'div',
	      { className: 'pure-g' },
	      _react2.default.createElement(
	        'div',
	        { className: 'pure-u-1 pure-u-xl-1-3' },
	        _react2.default.createElement(_CompanyCard2.default, { company: employer, link: link, title: title, start: start, end: end })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'pure-u-1 pure-u-xl-2-3' },
	        _react2.default.createElement(_SkillsCard2.default, { skills: skills, projects: projects, technologies: technologies })
	      )
	    );
	  }
	});

/***/ },

/***/ 161:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(32);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'Company Card',
	
	  render: function render() {
	    var _props = this.props;
	    var company = _props.company;
	    var link = _props.link;
	    var title = _props.title;
	    var start = _props.start;
	    var end = _props.end;
	
	
	    return _react2.default.createElement(
	      'a',
	      { href: link, target: '_blank' },
	      _react2.default.createElement(
	        'div',
	        { className: 'card card-link company-card' },
	        _react2.default.createElement(
	          'div',
	          { className: 'company-card__image' },
	          _react2.default.createElement('img', { src: 'assets/' + company.toLowerCase() + '.png', alt: company })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'company-card__info' },
	          _react2.default.createElement(
	            'h2',
	            null,
	            title
	          ),
	          _react2.default.createElement(
	            'p',
	            null,
	            _react2.default.createElement(
	              'span',
	              null,
	              start
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              ' - '
	            ),
	            _react2.default.createElement(
	              'span',
	              null,
	              end
	            )
	          )
	        )
	      )
	    );
	  }
	});

/***/ },

/***/ 162:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(32);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'Skills Card',
	
	  render: function render() {
	    var _props = this.props;
	    var skills = _props.skills;
	    var projects = _props.projects;
	    var technologies = _props.technologies;
	
	
	    var skillList = function skillList(skill, index) {
	      return _react2.default.createElement(
	        'li',
	        { key: index },
	        skill
	      );
	    };
	
	    var techList = function techList(tech, index) {
	      return _react2.default.createElement(
	        'span',
	        null,
	        'tech'
	      );
	    };
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'div',
	        { id: 'slider', className: 'card detail-card' },
	        _react2.default.createElement(
	          'ul',
	          null,
	          skills.map(skillList)
	        )
	      ),
	      _react2.default.createElement(
	        'h1',
	        { className: 'experience-header' },
	        'Technologies'
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'technology-card-list' },
	        technologies.map(techList)
	      )
	    );
	  }
	});

/***/ }

});
//# sourceMappingURL=app.js.map