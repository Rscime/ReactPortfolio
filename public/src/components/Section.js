import React from 'react';
import '../styles/Section.css';

const styles = {
    sectionStyles: {
      background: '#edf5c4',
    },

    sectionH3: {
      fontSize: '40px',
      color: '#020110',
    }
  };

  
function Section() {
    return (
      <section style={styles.sectionStyles} className="section">
        <h2 id="section-1">About Me</h2>
        <p>I Graduated from UCF with a bachelors in Biology and Biomedical Sciences with a minor in Psychology. 
            After graduating from UCF I continued my educational career at FAU and completed a masters degree in Geosciences with certificates in Geographic Information Systems GIS and Remote Sensing.
            While completing my masters degree I taught Biology at West Orange High School. 
            After completion of my Masters degree I started looking for a job in my field and I started working as a Geospatial Analyst at Leidos. 
            While working as a GIS techician I have noticed some gaps in the user experience of ESRI tools and hope to one day work with ERSI to make these spatial analyst tools more efficent.
        </p>
        <break>
        </break>

        <h2 id="section-2">Portfolio</h2>
                <h3><a href="https://rscime.github.io/prework-study-guide/">CSS, HTML, JavaScript Study Guide</a></h3>
                <h4><a href="https://github.com/Rscime/prework-study-guide">Repository</a></h4>
            <div className="card one"></div>
                <h3><a href="https://rscime.github.io/HoriseonHomepage">Sample Business Homepage</a></h3>
                <h4><a href="https://github.com/Rscime/HoriseonHomepage">Repository</a></h4>
            <div className="card two"></div>
                <h3><a href="https://rscime.github.io/Jetlagged/">JetLagged</a></h3>
                <h4><a href="https://github.com/Rscime/Jetlagged">Repository</a></h4>
            <div className="card three"></div>
                <h3><a href="https://polar-fjord-40224-3c437fb71328.herokuapp.com/">Text Editor</a></h3>
                <h4><a href="https://github.com/Rscime/TextEditor">Repository</a></h4>
            <div className="card four"></div>
                <h3><a href="https://ymster-3e5525cf81e8.herokuapp.com/#homepage-lunch">Yumster</a></h3>
                <h4><a href="https://github.com/Titan-MP/yumster.git">Repository</a></h4>
            <div className="card five"></div>
                <h3><a href="https://watch.screencastify.com/v/fHiR5uD8smo5svvV3YFi">SQL Employee Manager - Video Walkthrough</a></h3>
                <h4><a href="https://github.com/Rscime/EmployeeManager">Repository</a></h4>
            <div className="card six"></div>
        <break>
        </break>

        <h2 id="section-4">Resume</h2>
        <h4><a href="/Rachel_Scime_Resume.pdf">Downloadable Resume</a></h4>
        <break>
        </break>

      </section>
    );
  }
  
  export default Section;
  