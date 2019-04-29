import React, { Component } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

const markdown = ` 
KEEGAN MCCALLUM | ENTREPRENEUR / FULLSTACK DEVELOPER /  DATA ANALYST / SOFTWARE ARCHITECT
---------------------------

        83 Saghalie Rd, Victoria, BC V9A 0B8 | (416) 799-4203
        keeganmccallum3@gmail.com | http://github.com/keeganmccallum

PROFILE
-------

- 3 years of financial industry experience focusing on data analytics, optimisation,
  and large-scale data processing.

- 5 years experience in software development, focusing mostly on full stack web development,
  mobile application development, and data science.

- 1 year experience in engineering/product management

- Managed a team of 5 developers on multiple mission-critical projects

- designed, built and manged product development of multiple high impact, production-scale applications

- participated in the hiring/interview process, comfortable building and managing a team of software
  developers

- Bachelor's of Computing from Queens University

SKILLS
-------

- **Languages**: Python | Javascript | Java | PHP | C/C++ | BASH | YAML | HTML/CSS | Objective-C | Haskell | Prolog | ARM Assembly 

- **Fullstack Web Development**: | React | Redux | D3 | Plotly | Matplotlib | HandsonGrid | Jquery | Dojo | ES2016
  | AngularJS | NodeJS | Django | Flask | SailsJS | Socket.io | Deepstream.io | Pouch/CounchDB | Loopback | FeathersJS 
  | styled-components/emotion | PWA | ServiceWorkers | SEO | claudiajs | Zappa | NextJS | Postgrest | Material-UI | Redis 
  | Memcached/MCRouter | PushPin | Leaflet/Mapbox

- **Cloud SaaS Architecture**: Kubernetes | AWS | Google Cloud | Docker | Helm | Prometheus | Kong | Keycloak 
  | Serverless Framework | Kubeless | Fission | Google Cloud Functions | KillBill | Drone CI/CD | 

- **Data Analytics**: | Pandas | Numpy | GLPK | Gurobi | Apache Spark | Hadoop | PostGreSQL | SQL Server | MariaDB
  | MongoDB | SQLite | TimescaleDB | Redash | Kafka | Elasticsearch | Cassandra | Apache Flink | 

- **Machine Learning**: | Keras/Tensorflow | Magenta | LSTM | CNN | Spacy | NLTK | XGBoost |

- **Mobile Development**: | Android(Java) | iOS(Objective-C) | React Native | Cordova | Parse |

- **Network Engineering**: | FreeRadius | Icinga/Nagios | Device Monitoring | IOT | Wireless Failover 
  | DNS Security | Guest Wifi | CNA Browser | Captive Portal

- **Financial Management**: | Fixed Income Portfolio Management | Quantitative Finance | Linear Optimization
  | Statistics |

WORK
-------

#### Full Stack Developer | Colony Networks (January 2018 - Novemeber 2018)
#### Head of Engineering | Colony Networks (Novemeber 2018 - Present)


#### CTO | Grizzle (July 2017 - December 2017)

- managed, designed and implemented entire tech infrastuture as sole technical founder at a funded startup

    - Website Frontend:

        - Responsive site built using next.js, react, rebass, redux, emotion

        - Fully tested using storybooks as a base, jest snapshots and jest image snapshots for regression testing

        - PWA using service workers, all best practices from Google's lighthouse followed

        - Implemented SEO best practices such as structured data, social graph metatags, canonical URLS

    - Website Backend:

      - built using FeathersJS, PostgreSQL, and claudiajs(for deployment on AWS Lambda)

      - RESTFUL API which supports publishing articles from Superdesk, API key authentication, full text search with indices on all articles

    - CMS:

        - Setup and customized the opens source project Superdesk for our needs

        - comfortable forking/modifying open source code

    - Dev-ops:

        - Setup all deployments to be fully automated using GitLab CI, including automated tests

        - Setup custom docker deployments using docker compose, all with automated HTTPS encryption via letsencrypt, nginx as a reverse proxy

        - Managed deployments of Mautic(marketing automation), Metabase(business intelligence) and Superdesk(CMS)

        - Managed infrastuture on AWS as code using Terraform

#### Portfolio Analytics Specialist | TD Asset Management (Jan. 2014 - July 2017)

- Trade Blotter:

    - Architected and Managed Start to Finish

    - Full-featured trade modelling platform

    - Multi-window, real-time updates

    - Built using modern web technologies (React, Redux, Deepstream.io, Django Rest Framework)


- Bond Portfolio Optimizer:

    - Built and Architected Initial Production Release

    - Flexible Graphical User Interface to Build Complex Constraints

    - Multiple Objective Functions, Buy/Sell Lists

    - Built With Modern Data Analytics Tooling (Numpy, Pandas, Gurobi)


#### CTO | Personal Ventures (Sept. 2014 - June 2016)

- ReLease Rentals:

    - A mobile rental marketplace for the modern age with design cues taken from Uber and Tinder

    - Built with React Native, PostgreSQL and FeathersJS

- UFESS:

    - Aggregator for University Confessions facebook pages with 2,000 active users at peak

    - Supported anonymous posting directly through the application

    - Built with Ionic, Cordova, Strongloop Loopback

#### Student | Queens University (Sept. 2014 - April 2016)

- Sign Language Tutor:

    - Created a tutor application which leveraged gesture-recognition technology to tech the user proper sign language

    - Created a classifier which recognized a number of signs and gave the user feedback in real-time

    - Built using the Myo Wristband, a custom-built Flexible Mobile phone prototype, and Cordova/Java

- Open World Queens University Video Game:

    - Scale, 3D model of Queens University Campus which the user can explore. 2 minigames triggered by entering certain areas

    - Built with Unreal Engine, C++

#### Open Source

- sql4pandas

    - wrote a compiler for the SQLite language specification to allow running sql commands directly
      against pandas dataframes, written in pure python

EDUCATION
-------

- **Bachelors of Computing** | Queens University (Graduated April 2016)

- **Bachelors of Accounting and Financial Management** | University of Waterloo (left program after 3rd year)

`;

class App extends Component {
  render() {
    return (
      <ReactMarkdown source={markdown} />
    );
  }
}

export default App;
