
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { ScrollListenBox, ScrollListenNail , ScrollListen, createStore } from 'fit-scroll-listen'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import { Layout, Header, Section, Sidebar } from 'fit-layout-global'
                import Title from '../../../../components/title'
                import SidebarComponent from '../../../../components/side-bar'
                import readme from '../../../../lib/pc/tag/readme.md'
                import '../../../../lib/pc/tag/demo'

                const store = createStore()

                
                            import TagSource from '../../../../lib/pc/tag/src/tag/index.tsx'
                            import TagSourceCode from '-!text!../../../../lib/pc/tag/src/tag/index.tsx'
                            
                                import * as TagModule from '../../../../lib/pc/tag/src/tag/module.tsx'
                                import TagModuleCode from '-!text!../../../../lib/pc/tag/src/tag/module.tsx'
                                

                
                        import BasicComponent from '../../../../lib/pc/tag/demo/lists/basic.tsx'
                        import BasicCode from '-!text!../../../../lib/pc/tag/demo/lists/basic.tsx'
                        import BasicMarkdown from '../../../../lib/pc/tag/demo/lists/basic.md'
                        
                        import HandleComponent from '../../../../lib/pc/tag/demo/lists/handle.tsx'
                        import HandleCode from '-!text!../../../../lib/pc/tag/demo/lists/handle.tsx'
                        import HandleMarkdown from '../../../../lib/pc/tag/demo/lists/handle.md'
                        

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
                        document.title = '标签'
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
                                      npmName="fit-tag">

                                    <BasicComponent/>

                            </CodeView>
                        </Col>
                    
                        <Col span="24" style={colStyle}>
                            <CodeView store={store}
                                      md={HandleMarkdown}
                                      code={HandleCode}
                                      npmName="fit-tag">

                                    <HandleComponent/>

                            </CodeView>
                        </Col>
                    
                                </Row>
                            )
                            break
                        case 'document':
                            Content = (
                                <div>
                                    
                            <div style={docStyle}>
                                <CodeDoc code={TagSourceCode} instance={TagSource} moduleCode={TagModuleCode} moduleInstance={TagModule} />
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
                                        <SidebarComponent gitlabUrl="https://github.com/fit-component/pc-tag/tree/master"
                                 onChange={this.handlePageChange.bind(this)}/>
                                        <ScrollListen store={store}/>
                                    </Sidebar>
                                </Layout>
                            </div>
                        )
                    }
                }
                