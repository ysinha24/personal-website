import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import "../Styles/Landing.css";
import logo from "../Resources/profile.JPG";
import { Navbar } from '../Components/Navbar';
import { Space, Card, Layout } from 'antd';
const { Header, Content, Footer } = Layout;


export const LandingPage = () => {
    return (
        <>
            <Layout className="layout">
                
                <Navbar />
                    
                <Content
                    style={{
                    padding: '0 12rem',
                    }}
                >
                    <div className="site-layout-content">
                    <Space
                        direction="vertical"
                        size="middle"
                        style={{
                        display: 'flex',
                        }}
                    >
                        <Card title="About Me" size="large">
                            <img src={logo} className="logo" alt="logo"/>
                            
                            <p>I am Yash Sinha, a dedicated and passionate graduate
                            student pursuing my Master of Science in Computer Engineering
                            at Southern Methodist University. With a solid educational foundation,
                            including a bachelor's degree in Computer Science and Statistics, I am
                            driven to excel in the world of technology and innovation.
                            <br/><br/>As an expert programmer, I am proficient in various languages including
                            Python, R, JavaScript, and Bash and frameworks such as TensorFlow, Keras, and
                            ReactJS. My dedication to continuous improvement led me to become certified in DevOps
                            for Unix systems and AWS cloud services. Through rigorous coursework in Software Development,
                            Machine Learning, and Statistical Computing, I have honed my skills, emerging as a
                            seasoned programmer capable of tackling complex problems with innovative solutions.<br/>
                            </p>
                        </Card>
                        <Card title="Skills/Expertise/Certifications" size="medium">
                            <p>
                                <b>Technical Skills:</b><br/> 
                            <i>Languages:	</i>Python, R, C++, Java, SQL(MySQL), JavaScript, HTML, MATLAB, SAS, SPSS<br/>
                            <i>Environments:</i>	Git, Linux, DevOps, Windows, Anaconda, Docker, AWS
                            <br/>
                            <br/>• Strong proficiency in Python, TensorFlow, Numpy, Docker, Linux, UNIX, and R.
                                <br/>• Exceptional statistical skills, experience of building predictive models using a wide 
                                variety of tools and techniques (including neural networks, linear or logistic regression, random forest)
                                <br/>• Have good exposure in LAMP (Linux, Apache, MySQL, and Python) and WAMP Architectures.
                                <br/>• Deep understanding and implementation experience of Machine Learning models
                            
                            </p>

                            <p><b>Expertise:</b><br/>
                            Machine Learning, Data Mining, Statistical Computing, Time Series Analysis, Algorithms,
                                    Data Structures, Software Architecture, Databases, Graphical User Interfaces
                            </p>

                            <p>
                            <b>IT Certifiations:</b><br/>
                            CompTIA Linux+, AWS Solutions Architect, Microsoft Office                                
                            </p>
                        </Card>
                        <Card title="Education" size="small">
                            <p>
                                <b>Southern Methodist University</b><br/>
                                <i> Major</i> <br/>
                                Bachelor of Science in Computer Science<br/>
                                <t/>Bachelor of Science in Statistical Science  <br/><br/>
                                <i>Minor</i> <br/>Mathematics <br/><br/>

                                <i>Pursuing</i><br/>
                                M.S. Computer Engineering

                            </p>
                        </Card>
                        <Card title="Experience" size="small">
                            <p>Always Winning Copium</p>
                            
                        </Card>
                    </Space>
                    </div>
                </Content>
                <Footer
                    style={{
                    textAlign: 'center',
                    }}
                >
                    Yash Sinha ©2023
                </Footer>
            </Layout>
        </>
    );
};