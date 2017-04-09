import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';

const markdown = `
KEEGAN MCCALLUM | DATA ANALYST / WEB DEVELOPER
---------------------------

        85 Queens Wharf Rd, Toronto, ON M5V 0J9 | (416) 799-4203
        keeganmccallum3@gmail.com | http://github.com/keeganmccallum

PROFILE
-------

- 3 years of financial industry experience focusing on data analytics, optimisation,
  and large-scale data processing.

- 3 years experience in software development, focusing mostly on full stack web development,
  mobile application development, and data science.

- designed, built and manged product development of multiple high impact, production-scale applications

- participated in the hiring/interview process, comfortable building and managing a team of software
  developers

- Bachelor's of Computing from Queens University

SKILLS
-------

- **Fullstack Web Development**: | React | Redux | D3 | Plotly | Matplotlib | HandsonGrid | Jquery | Dojo | ES2016
  | AngularJS | NodeJS | Django | Flask | SailsJS | Socket.io | Deepstream.io | Pouch/CounchDB | Loopback | FeathersJS |

- **Mobile Development**: | Android(Java) | iOS(Objective-C) | React Native | Cordova | Realm.io | Parse |

- **Data Analytics**: | Pandas | Numpy | GLPK | Gurobi | Apach Spark | Hadoop | PostGreSQL | SQL Server | MariaDB
  | MongoDB | SQLite |

- **Machine Learning**: | Keras/Tensorflow | Magenta | LSTM | CNN | Spacy | NLTK |

- **Financial Management**: | Fixed Income Portfolio Management | Quantitative Finance | Linear Optimization
  | Statistics |

WORK
-------

#### Portfolio Analytics Specialist | TD Asset Management (Jan. 2014 - Present)

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
