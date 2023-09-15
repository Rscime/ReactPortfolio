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
        <div class="card one">
                <h3><a href="https://rscime.github.io/prework-study-guide/">CSS, HTML, JavaScript Study Guide</a></h3>
            </div>
            <div class="card two">
                <h3><a href="https://rscime.github.io/HoriseonHomepage">Sample Business Homepage</a></h3>
            </div>
            <div class="card">
                <h3><a href="https://rscime.github.io/Jetlagged/">JetLagged</a></h3>
            </div>
            <div class="card three">
                <h3><a href="#">card four</a></h3>
            </div>
            <div class="card four">
                <h3><a href="#">card five</a></h3>
            </div>
            <div class="card five">
                <h3><a href="#">card five</a></h3>
            </div>
            <div class="card six">
                <h3><a href="#">card five</a></h3>
            </div>
        <break>
        </break>

        <h2 id="section-3">Contact</h2>
    {/* NEED TO ADD A FORM FOR THIER CONTACT.. NOT MINE */}
        <p>
        
        </p>
        <break>
        </break>

        <h2 id="section-4">Resume</h2>
        <p>
        
        </p>
        <break>
        </break>

      </section>
    );
  }
  
  export default Section;
  