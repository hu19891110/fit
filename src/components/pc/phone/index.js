
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/phone/readme.md'
                import '../../../../lib/pc/phone/demo'

                

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/phone/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/phone/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/phone/demo/lists/basic.md'
                    

                const colStyle = {
                    padding: 10
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {}
                        document.title = '手机壳'
                    }

                    render() {
                        return (
                            <div className="_namespace">
                                <Title>{readme}</Title>

                                <Row>
                                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={BasicMarkdown} code={BasicCode}>
                            <BasicComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                                

                            </div>
                        )
                    }
                }
                