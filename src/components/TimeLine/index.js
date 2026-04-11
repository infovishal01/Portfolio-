import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function OppositeContentTimeline() {
  return (
    <Timeline >
      <h1 style={{fontSize:"3rem", fontWeight:"800", textAlign:"center"}}>
            Work Experience
          </h1>



          <br/>
          <br/>

  <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontWeight:"800"}}>
          AI/ML Practice (November 2025 - .....)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>
          Innodata India 
          </TimelineContent>
      </TimelineItem>

      <br/>
      <br/>
      <br/>
      {/* <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontWeight:"800"}}>
          SDE Intern (January 2025-June 2025)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>
          Amazon (HYD13)
          </TimelineContent>
      </TimelineItem> */}

      <br/>
      <br/>
      <br/>

      <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontWeight:"800"}}>
          AI/ML Intern (May 2025-October 2025)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>IIIOT Infotech, Gurgaon</TimelineContent>
      </TimelineItem>

      <br/>
      <br/>
      <br/>
    
      <TimelineItem>
        <TimelineOppositeContent color="blueviolet" style={{fontSize:"2rem",fontWeight:"800"}}>
          Web Developement Intern (May 2024-June 2024)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>Cognifyz Technologies</TimelineContent>
      </TimelineItem>

      <br/>
      <br/>
      <br/>

      <h1 style={{fontSize:"3rem", fontWeight:"800", textAlign: "center"}}>
            Education
          </h1>

          <br/>
          <br/>

      <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontWeight:"800"}}>
          B.Tech CSE (October 2021-April 2025)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>
          Maharishi Markandeshwar (Deemed to be University) 
          </TimelineContent>
      </TimelineItem>

      <br/>
      <br/>
      <br/>

      <TimelineItem>
        <TimelineOppositeContent color="blueviolet"style={{fontSize:"2rem",fontWeight:"800"}}>
          Senior Secondary (June 2020-April 2021)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>Nitishwar Mahavidyalaya Muzaffarpur </TimelineContent>
      </TimelineItem>
      <br/>
      <br/>
      <br/>
    
      <TimelineItem>
        <TimelineOppositeContent color="blueviolet" style={{fontSize:"2rem",fontWeight:"800"}}>
          High School (April 2018-May 2019)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent style={{fontSize:"2rem",fontWeight:"800"}}>St. Joseph's Sr. Sec. School </TimelineContent>
      </TimelineItem>
    
    </Timeline>
  );
}
