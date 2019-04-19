import '../styles/solarized.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Meta from '../components/meta'

const Blank = () => {
  return <>
    <Meta title="Blank | Solarized Resume Theme"/>
    <div className="container">
      <div className="headers">
      <header className="name">
        <h1>Your Name</h1>
      </header>
      <header className="contact-online">
        <p><a href="mailto:your.email@example.com">Email</a><br/></p>
        <p><a href="https://github.com/yourusername">GitHub</a><br/></p>
        <p><a href="https://www.linkedin.com/in/yourusername">Linked In</a><br/></p>
      </header>
      <header className="contact-irl">
        <p>
          Street <br />
          City etc <br />
          Country <br />
        </p>
        <p>+1-555-123123<br/></p>
      </header>
    </div>
    <article>
      <section className="proficiencies">
        <section className="languages">
          <h2>Languages (Example)</h2>
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
               </tbody>
            </table>
          </div>
          <div className="column">
            <table>
              <tbody>
                 <tr title="Proficient in C#">
                  <td><code>c#</code></td>
                  <td>+++</td> 
                </tr>
                <tr title="Confident in Python">
                  <td><code>py</code></td>
                  <td>++</td>
                </tr>
                <tr title="Proficient in PLPGSQL">
                  <td><code>plpgsql</code></td>
                  <td>++</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="apis">
          <h2>Tools and APIs (Example)</h2>
          <div className="column">
            <table>
              <tbody>
                <tr title="Specialized in jQuery">
                  <td><code>JQuery</code></td>
                  <td>++++</td>
                </tr>
               <tr title="Proficient with REST APIs">
                  <td><code>REST APIs</code></td>
                  <td>+++</td>
                </tr>
                <tr title="Proficient with Flask">
                  <td><code>Flask</code></td>
                  <td>+++</td>
                </tr>
             </tbody>
            </table>
          </div>
          <div className="column">
            <table>
              <tbody>
                <tr title="Confident with ReasonReact">
                  <td><code>ReasonReact</code></td>
                  <td>++</td>
                </tr>
                <tr title="Confident with Bootstrap 3">
                  <td><code>Bootstrap 3</code></td>
                  <td>++</td>
                </tr>
                <tr title="Confident with Linux Administration">
                  <td><code>Linux Admin</code></td>
                  <td>++</td>
                </tr>
             </tbody>
            </table>
          </div>
        </section>
        <p className="legend">
        My Self-Assessed Knowledge is:<br />
        ++++ = Specialized, + = Just the basics.</p>
      </section>
      <section className="projects">
        <h2>Code Samples</h2>
        <section className="project after-heading">
          <h4>Example</h4>
          <p><a href="http://github.com/yourusername/yourproject">Project</a> [Describe Project Here].</p>
          <h5>Feature</h5>
          <ul>
            <li>Feature bullet.</li>
            <li>Feature bullet.</li>
          </ul>
          <h5>Feature</h5>
          <ul>
            <li>Feature bullet.</li>
            <li>Feature bullet.</li>
          </ul>
          <h5>Feature</h5>
          <ul>
            <li>Feature bullet.</li>
            <li>Feature bullet.</li>
          </ul>
          <p><em>Utilized:</em>List tech, skills and tools used for this example.</p> 
        </section>
        <section className="project">
          <h4>Example</h4>
          <p><a href="http://github.com/yourusername/yourproject">Project</a> [Describe Project Here].</p>
          <h5>Feature</h5>
          <ul>
            <li>Feature bullet.</li>
            <li>Feature bullet.</li>
          </ul>
          <h5>Feature</h5>
          <ul>
            <li>Feature bullet.</li>
            <li>Feature bullet.</li>
          </ul>
          <h5>Feature</h5>
          <ul>
            <li>Feature bullet.</li>
            <li>Feature bullet.</li>
          </ul>
          <p><em>Utilized:</em>List tech, skills and tools used for this example.</p> 
        </section>
      </section>
      <section className="employment">
        <h2>Employment <span>[<span><FontAwesomeIcon icon="wifi"/> = Remote</span>]</span></h2>
        <section className="position after-heading">
          <header className="icons">
            <FontAwesomeIcon icon="wifi"/>
          </header>
          <header className="role">
            <h4>Role Title</h4>
            <h4>Company</h4>
            <h4>2015 &ndash; 2018</h4>
          </header>
          <p><a href="http://www.example.com">Link</a> to relevant product or company page.</p>
          <ul>
            <li>Achievement</li>
            <li>Work Performed</li>
            <li>Other Relevant Info</li>
          </ul>
        </section>
        <section className="position">
          <header className="icons">
          </header>
          <header className="role">
            <h4>Role Title</h4>
            <h4>Company</h4>
            <h4>2012 &ndash; 2015</h4>
          </header>
          <p><a href="http://www.example.com">Link</a> to relevant product or company page.</p>
          <ul>
            <li>Achievement</li>
            <li>Work Performed</li>
            <li>Other Relevant Info</li>
          </ul>
        </section>
        <section className="position">
          <header className="icons">
            <FontAwesomeIcon icon="wifi"/>
          </header>
          <header className="role">
            <h4>Role Title</h4>
            <h4>Company</h4>
            <h4>2009 &ndash; 2012</h4>
          </header>
          <p><a href="http://www.example.com">Link</a> to relevant product or company page.</p>
          <ul>
            <li>Achievement</li>
            <li>Work Performed</li>
            <li>Other Relevant Info</li>
          </ul>
        </section>
        <h2>Earlier Roles</h2>
        <section className="position after-heading">
          <header className="icons">
          </header>
          <header className="role">
            <h4>Role Title</h4>
            <h4>Company</h4>
            <h4>2008 &ndash; 2009</h4>
          </header>
          <p><a href="http://www.example.com">Link</a> to relevant product or company page.</p>
          <ul>
            <li>List fewer details for earlier roles unless highly-relevant.</li>
          </ul>
        </section>
      </section>
      <section className="education">
        <h2>Education</h2>
        <section className="course after-heading">
          <header className="location">
            <h4>Location</h4>
          </header>
          <header className="institute">
            <h4>Institute</h4>
          </header>
          <header className="years">
            <h4>2005 &ndash; 2008</h4>
          </header>
          <ul>
            <li><strong>Major</strong>: Computer Science, B.Sc.</li>
            <li><strong>Certificate (Minor)</strong>: Philosophy</li>
          </ul>
        </section>
      </section>
    </article>
  </div>
  </>
}

export default Blank;
