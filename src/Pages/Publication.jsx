import React from 'react';
import { Space, Card, Layout, Divider, Image } from 'antd';
import { Navbar } from '../Components/Navbar';
import "../Styles/Projects.css";
import paper from "../Resources/Paper.png";
import book1 from "../Resources/book1.png"
const { Header, Content, Footer } = Layout;


export const Publications = () => {
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
                        <Card 
                        title="MODSIM 2022 Paper - Real-Time Situation Awareness Assessment for Pilots" 
                        cover={<Image src={paper} width={400} className="img1" alt="img1"/>}>
                        
                        <p><b>Abstract</b><br/>

                        Assessing Situation Awareness (SA) for pilots in real time is critical to accelerate training of complex skills and 
maintain mission readiness. Traditional measures of SA are burdensome and subjective, thus cannot contribute to real 
time insights and adaptation in a simulation-based training environment. We have previously demonstrated that 
biometrics-based Machine Learning (ML) classifiers can be used to partly operationalize the construct of SA (Scielzo, 
Wilson, and Larson, 2020). That is, real time eye scan patterns and cognitive workload were shown to relate to level 
1 SA, perception, level 2 SA, comprehension, and, to a lesser extent, level 3 SA, or projection. The research presented 
here represents a continuation of this study, and a first step in demonstrating the diagnostic value of real time and 
objective measure of SA. Specifically, we built on our existing performance data that assessed pilots’ SA performing 
a high-altitude intercept mission, using the SA Global Assessment Technique (SAGAT) measure, by employing a mix 
of biometric data streams gathered from wrist-worn and eye tracker devices to regress automatically to SA scores. 
<br/><br/>These biometric data streams build from our previous work in predicting scan pattern quality and cognitive load. A 
number of transfer learned neural network models are investigated for combining these data streams, including an 
investigation into the best shared network representations. We compare the performance of random forests and neural 
networks in both a regression and classification task across 40 subjects, achieving 77% accuracy for Level 1 and 70% 
for Level 2. We compare the feature importance of the trained models between Level 1 and Level 2 to evaluate whether 
cognitive load or gaze pattern accuracy has more importance on situation awareness. Results are encouraging for 
constructing an automated SA classification system. Findings are discussed in terms of expected benefits for 
accelerating trainees’ skill acquisition and promoting warfighter readiness.

                            <br/></p>
                            

                        
                    </Card>
                    <Divider/>
                    <Card title="Data Mining Book">
                        <Image src={book1} width={300} className="img3" alt="img3"/>
                        <p>
                        This is a unique book which seamlessly weaves data mining technical concepts with business applications. This book lays out step by step approach to build a solid understanding of the data fundamentals and describes the ‘building blocks’ of data mining process. Each data mining process step is supported with examples of business applications and by executional ‘R’ programming code. It has a complete Case Study implementing all the data mining steps with executable ‘R’ code.
                        <br/><br/>This book narrates the subject matter in a classic school textbook style but extends the conversations to more practical applications of the concepts providing an end-to-end 360-degree view of data mining.
                        <br/><br/>•	The first 3 chapters help us understand the very basics of data and data warehousing concepts. It includes understanding the essentials of data mining, fundamentals of data and databases, and data warehouse concepts.
                        <br/><br/>•	The next 3 chapters present the key steps of data mining processes which includes data preparation, data mining techniques, and data visualization.
                        <br/><br/>•	The concluding section includes a case study that applies all the data mining concepts presented in this book with fully executable ‘R’ code.
                        <br/><br/>This book provides a complete understanding of data mining techniques for data professionals and business professionals. By this virtue, the book is a holistic guide and an important manuscript to read as a desktop reference. This book rightly builds an understanding of data mining principles and their derivation.
                            <br/></p>
                    </Card>
                    </Space>
                </div>
            </Content>
        </Layout>
    </>
}