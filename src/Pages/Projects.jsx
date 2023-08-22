import React from 'react';
import { Space, Card, Layout, Divider, Image } from 'antd';
import { Navbar } from '../Components/Navbar';
import "../Styles/Projects.css";
import IOT from "../Resources/DoorRecognitionIOT.jpg";
import arch from "../Resources/ESP32-Recognition network.jpg";
import robot1 from "../Resources/robot_img.JPG"
import robot2 from "../Resources/robot_gif.gif"
const { Header, Content, Footer } = Layout;


export const Projects = () => {
    return <>
        <Layout className="layout">
            <Navbar/>
            <Content style={{padding: '0 12rem',}}>
                <div className="site-layout-content">
                <Space
                    direction="vertical"
                    size="middle"
                    style={{
                    display: 'flex',
                    }}
                >
                        <Card title="Facial Recognition for Home Security">
                        <Image src={IOT} width={300} className="img1" alt="img1"/>
                        <p>In this project, I utilized multiple ESP32-CAM microcontrollers as IoT
                            devices to achieve individual detection functionality. These devices 
                            efficiently capture and store images of detected individuals in a 
                            local MySQL database using APIs. Leveraging the power of AWS Lambda 
                            cloud computing, I further processed these images by implementing 
                            OpenCV and leveraging existing machine learning architectures to 
                            identify known faces. 
                            <br/></p>
                            
                            <Image src={arch} width={300} className="img2" alt="img2"/>
                            <p>
                            The system also showcases its real-time 
                            capabilities by sending SMS notifications for unauthorized access and 
                            providing insightful entry analysis. The culmination of these efforts 
                            is a comprehensive weekly overview of occurrences, enhancing security 
                            measures and insights.</p>

                        
                    </Card>
                    <Divider/>
                    <Card title="SMU KNW Robot Competition">
                        <Image src={robot1} width={300} className="img3" alt="img3"/>
                        <p>Worked as a team to develop a robot that achieves certain functionality 
                            (sensor readings, navigation, and adaptability). Used the scrum methodology 
                            to complete certain deliverables within five sprints, efficiently planning 
                            and dividing work amongst members and ultimately placed first in the 
                            competition.<br/><br/>
                            •	Used C++ to program and flash the sensors/microprocessors to create an 
                            adaptive system to monitor Environmental Agents and display Sensors <br/>
                            •	Used dynamic programming to optimize performance for real-time usage <br/>
                            •	Worked with electrical tools related to wiring, soldering, and testing the system <br/>
                            •	Applied many mechanical skills in the metal shop and used relevant 
                            software such as CAD to create complex diagrams of the robot <br/>
                            •	Associated with debugging the progress monitored on JIRA using Scrum methodology.<br/><br/></p>

                        <Image src={robot2} width={300} className="img4" alt="img4"/>
                    </Card>
                    </Space>
                </div>
            </Content>
        </Layout>
    </>
}