
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/tb/captcha-drag/readme.md'
                import '../../../../lib/tb/captcha-drag/demo'

                const store = createStore()

                
                            import CaptchaDragSource from '../../../../lib/tb/captcha-drag/src/captcha-drag/index.tsx'
                            import CaptchaDragSourceCode from '-!text!../../../../lib/tb/captcha-drag/src/captcha-drag/index.tsx'
                            
                                import * as CaptchaDragModule from '../../../../lib/tb/captcha-drag/src/captcha-drag/module.tsx'
                                import CaptchaDragModuleCode from '-!text!../../../../lib/tb/captcha-drag/src/captcha-drag/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/tb/captcha-drag/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/tb/captcha-drag/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/tb/captcha-drag/demo/lists/basic.md'
                        
                        import SuccessComponent from '../../../../lib/tb/captcha-drag/demo/lists/success.tsx'
                        import SuccessCode from '-!text!../../../../lib/tb/captcha-drag/demo/lists/success.tsx'
                        import SuccessMarkdown from '../../../../lib/tb/captcha-drag/demo/lists/success.md'
                        

                const colStyle = {
                    padding: 10,
                    boxSizing: 'border-box'
                }

                const docStyle = {
                    margin: 10,
                    background: 'white'
                }

                export default class DemoBox extends React.Component {
                    constructor(props) {
                        super(props)
                        this.state = {
                            page: 'demo'
                        }
                        document.title = '拖拽验证码'
                    }

                    handlePageChange(value) {
                        this.setState({
                            page: value
                        })
                    }

                    render() {
                        let Content = null

                        switch (this.state.page) {
                        case 'demo':
                            Content = (
                                <Row>
                                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={BasicMarkdown}
                                      code={BasicCode}
                                      npmName="tb-captcha-drag">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={SuccessMarkdown}
                                      code={SuccessCode}
                                      npmName="tb-captcha-drag">

                                    <SuccessComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={CaptchaDragSourceCode} instance={CaptchaDragSource} moduleCode={CaptchaDragModuleCode} moduleInstance={CaptchaDragModule} />
                            </div>
                            
                                </div>
                            )
                            break
                        }

                        return (
                            <div className="_namespace">
                                <Layout>
                                    <Section>
                                        <Title>{readme}</Title>
                                        <ScrollListenBox store={store}>
                                            {Content}
                                        </ScrollListenBox>
                                    </Section>
                                    <Sidebar direction="right"
                                             width={120}>
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/tb-captcha-drag/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                