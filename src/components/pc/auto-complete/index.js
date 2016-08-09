
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/auto-complete/readme.md'
                import '../../../../lib/pc/auto-complete/demo'

                const store = createStore()

                
                            import AutoCompleteSource from '../../../../lib/pc/auto-complete/src/auto-complete/index.tsx'
                            import AutoCompleteSourceCode from '-!text!../../../../lib/pc/auto-complete/src/auto-complete/index.tsx'
                            
                                import * as AutoCompleteModule from '../../../../lib/pc/auto-complete/src/auto-complete/module.tsx'
                                import AutoCompleteModuleCode from '-!text!../../../../lib/pc/auto-complete/src/auto-complete/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/auto-complete/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/auto-complete/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/auto-complete/demo/lists/basic.md'
                        
                        import LocalComponent from '../../../../lib/pc/auto-complete/demo/lists/local.tsx'
                        import LocalCode from '-!text!../../../../lib/pc/auto-complete/demo/lists/local.tsx'
                        import LocalMarkdown from '../../../../lib/pc/auto-complete/demo/lists/local.md'
                        
                        import CustomParseComponent from '../../../../lib/pc/auto-complete/demo/lists/custom-parse.tsx'
                        import CustomParseCode from '-!text!../../../../lib/pc/auto-complete/demo/lists/custom-parse.tsx'
                        import CustomParseMarkdown from '../../../../lib/pc/auto-complete/demo/lists/custom-parse.md'
                        
                        import CallbackComponent from '../../../../lib/pc/auto-complete/demo/lists/callback.tsx'
                        import CallbackCode from '-!text!../../../../lib/pc/auto-complete/demo/lists/callback.tsx'
                        import CallbackMarkdown from '../../../../lib/pc/auto-complete/demo/lists/callback.md'
                        

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
                        document.title = '自动完成'
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
                                      npmName="fit-auto-complete">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={LocalMarkdown}
                                      code={LocalCode}
                                      npmName="fit-auto-complete">

                                    <LocalComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CustomParseMarkdown}
                                      code={CustomParseCode}
                                      npmName="fit-auto-complete">

                                    <CustomParseComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={CallbackMarkdown}
                                      code={CallbackCode}
                                      npmName="fit-auto-complete">

                                    <CallbackComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={AutoCompleteSourceCode} instance={AutoCompleteSource} moduleCode={AutoCompleteModuleCode} moduleInstance={AutoCompleteModule} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-auto-complete/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                