
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/message/readme.md'
                import '../../../../lib/pc/message/demo'

                const store = createStore()

                

                
                        import BasicComponent from '../../../../lib/pc/message/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/message/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/message/demo/lists/basic.md'
                        
                        import CallbackComponent from '../../../../lib/pc/message/demo/lists/callback.tsx'
                        import CallbackCode from '-!text!../../../../lib/pc/message/demo/lists/callback.tsx'
                        import CallbackMarkdown from '../../../../lib/pc/message/demo/lists/callback.md'
                        
                        import DurationComponent from '../../../../lib/pc/message/demo/lists/duration.tsx'
                        import DurationCode from '-!text!../../../../lib/pc/message/demo/lists/duration.tsx'
                        import DurationMarkdown from '../../../../lib/pc/message/demo/lists/duration.md'
                        
                        import TypeComponent from '../../../../lib/pc/message/demo/lists/type.tsx'
                        import TypeCode from '-!text!../../../../lib/pc/message/demo/lists/type.tsx'
                        import TypeMarkdown from '../../../../lib/pc/message/demo/lists/type.md'
                        

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
                        document.title = '提示'
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
                                      npmName="fit-message">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CallbackMarkdown}
                                      code={CallbackCode}
                                      npmName="fit-message">

                                    <CallbackComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={DurationMarkdown}
                                      code={DurationCode}
                                      npmName="fit-message">

                                    <DurationComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={TypeMarkdown}
                                      code={TypeCode}
                                      npmName="fit-message">

                                    <TypeComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-message/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                