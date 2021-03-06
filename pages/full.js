import '../styles/solarized.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Meta from '../components/meta'

const SevenCups = () => {
  return <>
    <Meta title="Julian Suggate | Full Resume"/>
    <div className="container">
    <div className="headers">
      <header className="name">
        <h1>Julian Suggate</h1>
        <h2>B.Sc., RYT200, CMT</h2>
      </header>
      <header className="contact-online">
        <p><a href="mailto:julian.suggate@gmail.com">Email</a><br/></p>
        <p><a href="https://github.com/snailuj">GitHub</a><br/></p>
        <p><a href="https://www.linkedin.com/in/juliansuggate">Linked In</a><br/></p>
      </header>
      <header className="contact-irl">
        <p>
          Woolston <br />
          Christchurch 8023 <br />
          New Zealand <br />
        </p>
        <p>+6421 157 8562<br/></p>
      </header>
    </div>
    <article>
      <section className="proficiencies">
        <section className="languages">
          <h2>Languages</h2>
          <div className="row">
            <div className="column">
              <table>
                <tbody>
                  <tr title="Specialized in JS">
                    <td><code>js</code></td>
                    <td>++++</td>
                  </tr>
                   <tr title="Specialized in HTML">
                   <td><code>html</code></td>
                    <td>++++</td>
                  </tr>
                  <tr title="Specialized in CSS">
                    <td><code>css</code></td>
                    <td>++++</td>
                  </tr>
                  <tr title="Proficient in Python">
                    <td><code>py</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient in PHP">
                    <td><code>php</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient in SQL">
                    <td><code>sql</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient in C">
                    <td><code>c</code></td>
                    <td>+++</td>
                  </tr>
                 </tbody>
              </table>
            </div>
            <div className="column">
              <table>
                <tbody>
                  <tr title="Proficient in PLPGSQL">
                    <td><code>plpgsql</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Confident in C#">
                    <td><code>c#</code></td>
                    <td>++</td> 
                  </tr>
                  <tr title="Confident in PL/SQL">
                    <td><code>pl/sql</code></td>
                    <td>++</td>
                  </tr>
                  <tr title="Confident in ReasonML">
                    <td><code>reasonml</code></td>
                    <td>++</td> 
                  </tr>
                  <tr title="Familiar with Elixir">
                    <td><code>elixir</code></td>
                    <td>+</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <div className="row">
            <div className="column">
              <table>
                <tbody>
                  <tr title="Specialised with OOP">
                    <td><code>OOP</code></td>
                    <td>++++</td>
                  </tr>
                  <tr title="Specialised with Technical Architecture">
                    <td><code>GoF, IoC, MVC</code></td>
                    <td>++++</td>
                  </tr>
                  
                  <tr title="Proficient with REST APIs">
                    <td><code>REST APIs</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient with Responsive UI">
                    <td><code>Responsive UI</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient with Agile Development">
                    <td><code>Agile</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient with Mentoring">
                    <td><code>Mentoring</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Confident with Cloud Admin">
                    <td><code>Cloud Admin</code></td>
                    <td>++</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="apis">
          <h2>Tools and APIs</h2>
          <div className="row">
            <div className="column">
              <table>
                <tbody>
                  <tr title="Specialized in jQuery">
                    <td><code>JQuery</code></td>
                    <td>++++</td>
                  </tr>
                  <tr title="Proficient with Documentation Generators">
                    <td><code>JSDoc etc</code></td>
                    <td>+++</td>
                  </tr>            
                  <tr title="Proficient with Flask">
                    <td><code>Flask</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient with Postgres">
                    <td><code>Postgres</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient with WordPress">
                    <td><code>WordPress</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient with Tailwind">
                    <td><code>Tailwind</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient with Bootstrap 3">
                    <td><code>Bootstrap 3</code></td>
                    <td>+++</td>
                  </tr>
                  <tr title="Proficient with ASP.NET 1 &ndash; 4">
                    <td><code>ASP.NET</code></td>
                    <td>+++</td>
                  </tr>
               </tbody>
              </table>
            </div>
            <div className="column">
              <table>
                <tbody>
                  <tr title="Confident with Reactjs">
                    <td><code>Reactjs</code></td>
                    <td>++</td>
                  </tr>
                  <tr title="Confident with ReasonReact">
                    <td><code>ReasonReact</code></td>
                    <td>++</td>
                  </tr>
                  <tr title="Confident with Next.js">
                    <td><code>Next.js</code></td>
                    <td>++</td>
                  </tr>
                  <tr title="Confident with webpack">
                    <td><code>Webpack</code></td>
                    <td>++</td>
                  </tr>
                  <tr title="Familiar with Express.js">
                    <td><code>Express.js</code></td>
                    <td>+</td>
                  </tr>
                  <tr title="Familiar with Phoenix and Ecto">
                    <td><code>Phoenix</code></td>
                    <td>+</td>
                  </tr>
               </tbody>
              </table>
            </div>
          </div>
        </section>
        <p className="legend">
        My Self-Assessed Knowledge is:<br />
        ++++ = Specialized, + = Just the basics.</p>
      </section>
      <section className="projects">
        <h2>Code Samples</h2>
        <section className="project after-heading">
          <h4>Babylib</h4>
          <p><a href="http://github.com/snailuj/babylib">Babylib</a> is an experimental MVC Plugin
            Framework for WordPress implemented as a WordPress Plugin.</p>
          <h5>Alternative Plugin API</h5>
          <ul>
            <li>Escapes the WordPress Plugin API via Facade classes.</li>
            <li>Leverages <code>composer</code> and auto-loading.</li>
            <li>Auto-discovery of sub-plugins, their Controller classes and View templates.</li> 
            <li>OO from the ground up: coded to the interface, not the implementation.</li>
            <li>Complex iCalendar utilities via a fork of Sabre VObject.</li>
          </ul>
          <h5>Custom ORM</h5>
          <ul>
            <li>Strongly-typed ORM CRUD operations for whole or partial object graphs.</li>
            <li>Pre-upsert column validation.</li> 
            <li>Integrates with Sabre to provide CRUD for iCalendar events.</li>
            <li>Coded from scratch purely for the learning and not intended to rival Doctrine / Eloquent et al.</li>
          </ul>
          <h5>Design Patterns</h5>
          <ul>
            <li>Implementation of Composite for composite Plugins.</li>
            <li>Abstract Factory for creation of singular Plugins and marshalling of relational data in the ORM.</li>
            <li>Facade classes shield Babylib code from the WordPress API.</li>
            <li>Applies Dependency Injection for providing environment context (DB settings, log levels, sub-plugins).</li>
          </ul>
          <p><em>Utilized:</em> PHP, PHPDoc, OO Programming, MVC Architecture, WordPress 4.7, MySQL, composer, vagrant, ansible</p> 
        </section>
        <section className="project">
          <h4>Solarized Resume Theme</h4>
          <p><a href="http://snailuj.github.io">Solarized resume theme</a> is the markup and CSS used to create the document you are currently viewing (both print and web).</p>
          <ul>
            <li>Utilises Next.js to inject the React ecosystem</li>
            <li>Provides Tailwind CSS framework and enables editing with Hot Module Reloading.</li>
            <li>Responsive design using clean markup.</li>
            <li>Vibrant <code>solarized</code> colour pallete for web (thanks to 
              Ethan Schoonover), while print media queries yield classic black-and-white print styles.</li>
            <li>Future work to include storing resumes in a database and a UI for creating them.</li>
          </ul>
        </section>
      </section>
      <section className="employment">
        <h2>Employment <span>[<span><FontAwesomeIcon icon="wifi"/> = Remote</span>]</span></h2>
        <section className="position after-heading">
          <header className="icons">
            <FontAwesomeIcon icon="wifi"/>
          </header>
          <header className="role">
            <h4>Senior Developer and SME</h4>
            <h4>GymMaster ("Fast 500" Startup)</h4>
            <h4>2015, 2018 &ndash; Present</h4>
          </header>
          <p><a href="https://www.gymmastersoftware.com/">GymMaster</a> is Membership Management Software for Gym's, Clinics and Yoga Studios.</p>
          <ul>
            <li>Applied schema design principles to envision, program and deploy to production a new system of
                user-customisable role-based access control for GymMaster, coded in Postgres PLPGSQL,
                Python, HTML and jQuery.</li>
            <li>Architected an iterative UI rebuild with ReasonReact and Next.js utilising locale-aware server-side
              rendering of translation strings, tree-shaken SVG icons, and memoized caching of Flask endpoints for client-side API discovery.</li>
            <li>Mentored, assisted and assigned work to 3 intern developers for 3 months.</li>
            <li>Designed, coded and/or oversaw usability improvements to 6 key modals, the settings screens, and several interface components.</li>
            <li>Engaged Yoga Studio prospects and clients face-to-face and online as a Subject Matter Expert for pre-sales and requirements.</li>
          </ul>
        </section>
        <section className="position">
          <header className="icons">
            <FontAwesomeIcon icon="wifi"/>
          </header>
          <header className="role">
            <h4>Freelance Full-Stack Developer</h4>
            <h4>Canberra Balloons</h4>
            <h4>2011 &ndash; Present</h4>
          </header>
        <p><a href="https://www.canberraballoons.com.au/">Canberra Balloons</a> is a balloon-flight operator across Australia that uses a legacy, bespoke bookings web-app built using ASP.NET 1.1, which predates my time there.</p>
          <ul>
            <li>Negotiated contracts, project timelines and costs for 2 major upgrades to the system and dozens of smaller enhancements.</li>
            <li>Created, tested and deployed 3 secure, public-facing single-page jQuery bookings forms, which integrated with the eWay 
              Payments API and a legacy ASP.NET 1.1 system that I coerced into speaking JSON.</li>
            <li>Successfully migrated to AWS and Amazon WorkMail with zero downtime from boutique web/email host including 5 TLDs, 1 Windows
              Server for the ASP.NET app, 2 Debian servers for WordPress, 3 SSL certificates, and 20 email addresses.</li>
            <li>Established pricing, estimates, coding practices and frameworks for replacing the legacy system as a WordPress Plugin.</li>
            <li>Eliminated "works-on-my-machine" bugs for WordPress development by provisioning local development VMs and production servers
              via identical <code>YAML</code> thanks to <code>trellis</code> and <code>ansible</code>, and managing WordPress plugins via
              composer thanks to <code>bedrock</code>.</li>
            <li>Pivoted on rebuild of the legacy system as a WordPress plugin due to security concerns and refunded the client's investment
              to date.</li>
            <li>Planned work: replace legacy system with Elixir stack, using Phoenix LiveView for a "Low JS" user interface, and integrating 
              with the OAuth server built into WordPress for Single Sign-On from the WP dashboard.</li>
          </ul>
        </section>
        <section className="position">
          <header className="icons">
          </header>
          <header className="role">
            <h4>Itinerant Yoga Teacher<br />&amp; Certified Massage Therapist</h4>
            <h4>Various Locations</h4>
            <h4>2015 &ndash; 2017</h4>
          </header>
          <p>Learning from and teaching others.</p>
          <ul>
            <li>6 &ndash; 8 yoga classes per week in the Anusara style</li>
            <li>Successful therapy practice</li>
            <li>Managed all aspects of both businesses including book-keeping, advertising, class design, statutory and professional development requirements</li>
          </ul>
        </section>
        <section className="position">
          <header className="icons">
          </header>
          <header className="role">
            <h4>Builder's Apprentice</h4>
            <h4>Beaumann Builders</h4>
            <h4>2013 &ndash; 2014</h4>
          </header>
          <p>Learning to build houses.</p>
          <ul>
            <li>Marked out, hand-dug and poured concrete for two ring foundations for two major extensions to residential properties.</li>
            <li>Stood and fixed wall frames and trusses on arrival from assembly yard for two extensions.</li>
            <li>Converted a garage into a semi-detached unit for a friend.</li>
            <li>Altered and hand-built wall frames and rafters for dozens of residential extensions.</li>
            <li>Completed all requirements of the Pre-Trade Carpentry Certificate.</li>
            <li>Sole-charge for two weeks while the owner was overseas.</li>
          </ul>
        </section>
        <section className="position">
          <header className="icons">
          </header>
          <header className="role">
            <h4>Full-Stack Developer</h4>
            <h4>Sungard Systems Ltd.</h4>
            <h4>2012</h4>
          </header>
          <p>Sungard had recently acquired this company, which specialised in Asset Finance solutions, when I began a 6 month contract there.</p>
          <ul>
            <li>Introduced Javascript module patterns to assist with JSUnit testing, which were then adopted by the architecture team.</li>
            <li>Prototyped use of knockout.js two-way databinding.</li>
            <li>Increased responsiveness of the app by implementing recycling of view markup.</li>
          </ul>
        </section>
        <section className="position">
          <header className="icons">
          </header>
          <header className="role">
            <h4>Full-Stack Developer</h4>
            <h4>Cerebral Fix Ltd.</h4>
            <h4>2009 &ndash; 2011</h4>
          </header>
          <p><a href="http://cerebralfix.com">Cerebral Fix</a>: Flash / Facebook / Unity casual game dev.</p>
          <ul>
            <li>Created <code>linq to SQL</code> layer using <code>C#</code> and <code>SQL Server</code> for persisting game high scores and preferences.</li>
            <li>Spearheaded, built and analysed in-game <code>Mixpanel</code> cloud metrics for tracking game adoption and usage.</li>
            <li>Created strongly-typed client-server <code>JSON</code> remoting layers in both <code>Actionscript 3</code> and <code>C#</code>, using <code>WCF</code> in <code>ASP.NET 2.0</code>.</li>
          </ul>
        </section>
        <h2 className="earlier">Earlier Roles</h2>
        <section className="position after-heading">
          <header className="icons">
            <FontAwesomeIcon icon="wifi"/>
          </header>
          <header className="role">
            <h4>Senior Actionscript Developer</h4>
            <h4>mFlow (Startup)</h4>
            <h4>2008 &ndash; 2009</h4>
          </header>
          <p><a href="https://wikipedia.org/wiki/Mflow">mFlow</a>: 
            a since-failed social music streaming and recommendation service
            that rewarded influencers for sharing songs with cash based on their reach.</p>
          <ul>
            <li>Designed and developed an MVC architecture for the rich-client desktop app in Actionscript 3 and Flex running on Adobe AIR.</li>
            <li>Created local caching infrastructure using Adobe AIR's built-in SQLite facility.</li>
            <li>Built sharing cards and feedstream components.</li>
            <li>Travel to London for a month-long onsite codecamp at mFlow HQ.</li>
            <li>Remote programming the rest of the time.</li>
          </ul>
        </section>
        <section className="position">
          <header className="icons">
          </header>
          <header className="role">
            <h4>Senior C#, PL/SQL Developer</h4>
            <h4>Commonwealth Bank of Australia</h4>
            <h4>2006 &ndash; 2007</h4>
          </header>
          <p>CBA is one of the "Big 4" banks in the Australasian region.</p>
          <ul>
            <li>Leveraged knowledge of C# and UI design to construct WinForms solutions
              within a "Vertical Slice" architecture under the guidance of Microsoft.</li>
            <li>Used Visual Studio.NET and SQL Developer Studio to create new features within a codebase containing 10M+ lines of C#, 2M+ lines of PL/SQL</li>
            <li>Technical leadership role on the development team for an Actionscript app for mortgage brokers that ran on Adobe AIR.</li>
            <li>Created a remoting layer that used SOAP Schemas to generate strongly-typed Actionscript classes.</li>
          </ul>
        </section>         
        <section className="position">
          <header className="icons">
            <FontAwesomeIcon icon="wifi"/>
          </header>
          <header className="role">
            <h4>Full-Stack Developer</h4>
            <h4>MSO New York</h4>
            <h4>2004 &ndash; 2006</h4>
          </header>
          <p>Hedge Fund Analytics platforms developed for Manhattan clients by MSO New York, a now-defunct subsidiary
            of <a href="https://wikipedia.org/wiki/Diligent_Corporation">Diligent Corporation</a>.</p>
          <ul>
            <li>Travelled and worked in Manhattan for a month-long engagement with the development team of one of our Hedge Fund clients.</li>
            <li>Developed code in C#, .NET, Javascript, Actionscript, SQL, and HTML using Visual Studio. </li>
            <li>Collaborated on the implementation of algorithms and data structures for Hedge Fund Analytics.</li>
          </ul>
        </section>         
        <section className="position">
          <header className="icons">
            <FontAwesomeIcon icon="wifi"/>
          </header>
          <header className="role">
            <h4>Graduate Web Developer</h4>
            <h4>e2Media</h4>
            <h4>2002 &ndash; 2004</h4>
          </header>
          <p>e2Media (now <a href="https://e2digital.co.nz/">e2Digital</a>): a web design studio and development shop.</p>
          <ul>
            <li>Mentored by CTO to single-handedly create <code>maid</code> using <code>ANSI C</code> with <code>GC</code> for memory management:
              a customisable newsletter generator built for speed. Using the hardware of the time, it could generate 70,000+ Multipart emails with BASE64 encoding
              in under 2 hours, making heavy use of RegExes, caching, Postgres and <code>lib-curl</code> to merge web and database
              content into bespoke templates.</li>
            <li>Developed and tested code in PHP, Apache, C, MySQL and Postgres using RHEL, Jedit.</li>
          </ul>
        </section>         
      </section>
      <section className="education">
        <h2>Education</h2>
        <section className="course">
          <header className="location">
            <h4><FontAwesomeIcon icon="wifi"/> Pearce, AZ</h4>
          </header>
          <header className="institute">
            <h4>Dharma Treasure Inc.</h4>
          </header>
          <header className="years">
            <h4>2018 &ndash; Present</h4>
          </header>
          <ul>
            <li><strong>Authorized Dharma Treasure Meditation Teacher</strong></li>
          </ul>
        </section>
        
        <section className="course">
          <header className="location">
            <h4>Christchurch, NZ</h4>
          </header>
          <header className="institute">
            <h4>NZ Institute of Sport</h4>
          </header>
          <header className="years">
            <h4>2014</h4>
          </header>
          <ul>
            <li><strong>Certificate in Massage Therapy Level 5</strong></li>
          </ul>
        </section>

        <section className="course">
          <header className="location">
            <h4>Christchurch, NZ</h4>
          </header>
          <header className="institute">
            <h4>Grassroots Yoga</h4>
          </header>
          <header className="years">
            <h4>2013 &ndash; 2014</h4>
          </header>
          <ul>
            <li><strong>200 Hour Certificate in Yoga Teaching</strong></li>
          </ul>
        </section>
               
        <section className="course after-heading">
          <header className="location">
            <h4>Christchurch, NZ</h4>
          </header>
          <header className="institute">
            <h4>Canterbury University</h4>
          </header>
          <header className="years">
            <h4>1998 &ndash; 2001</h4>
          </header>
          <ul>
            <li><strong>B.Sc. Computer Science</strong></li>
            <li><strong>Minor in Philosophy</strong></li>
            <li><strong>GPA 8 (3.67 US)</strong></li>
          </ul>
        </section>
      </section>
    </article>
  </div>
  </>
}

export default SevenCups;
