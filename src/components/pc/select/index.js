
                import React from 'react'
                import CodeView from '../../../../components/code-view'
                import Highlight from 'react-highlight'
                import { Row, Col } from 'fit-layout'
                import CodeDoc from '../../../../components/code-doc'
                import Title from '../../../../components/title'
                import readme from '../../../../lib/pc/select/readme.md'
                import '../../../../lib/pc/select/demo'

                
                        import SelectSource from '../../../../lib/pc/select/src/select'
                        import SelectSourceCode from 'text!../../../../lib/pc/select/src/select'
                        
                        import OptionSource from '../../../../lib/pc/select/src/option'
                        import OptionSourceCode from 'text!../../../../lib/pc/select/src/option'
                        
                        import OptGroupSource from '../../../../lib/pc/select/src/opt-group'
                        import OptGroupSourceCode from 'text!../../../../lib/pc/select/src/opt-group'
                        

                
                    import BasicComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/basic.js'
                    import BasicCode from 'text!../../../../lib/pc/select/demo/lists/basic.js'
                    import BasicMarkdown from '../../../../lib/pc/select/demo/lists/basic.md'
                    
                    import DisabledComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/disabled.js'
                    import DisabledCode from 'text!../../../../lib/pc/select/demo/lists/disabled.js'
                    import DisabledMarkdown from '../../../../lib/pc/select/demo/lists/disabled.md'
                    
                    import GroupComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/group.js'
                    import GroupCode from 'text!../../../../lib/pc/select/demo/lists/group.js'
                    import GroupMarkdown from '../../../../lib/pc/select/demo/lists/group.md'
                    
                    import LabelComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/label.js'
                    import LabelCode from 'text!../../../../lib/pc/select/demo/lists/label.js'
                    import LabelMarkdown from '../../../../lib/pc/select/demo/lists/label.md'
                    
                    import SearchComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/search.js'
                    import SearchCode from 'text!../../../../lib/pc/select/demo/lists/search.js'
                    import SearchMarkdown from '../../../../lib/pc/select/demo/lists/search.md'
                    
                    import SimpleComponent from 'react-hot-loader!babel?presets[]=react,presets[]=es2015!../../../../lib/pc/select/demo/lists/simple.js'
                    import SimpleCode from 'text!../../../../lib/pc/select/demo/lists/simple.js'
                    import SimpleMarkdown from '../../../../lib/pc/select/demo/lists/simple.md'
                    

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
                        document.title = '选择框'
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
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={DisabledMarkdown} code={DisabledCode}>
                            <DisabledComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={GroupMarkdown} code={GroupCode}>
                            <GroupComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={LabelMarkdown} code={LabelCode}>
                            <LabelComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={SearchMarkdown} code={SearchCode}>
                            <SearchComponent/>
                        </CodeView>
                    </Col>
                    
                    <Col span="12" style={colStyle}>
                        <CodeView md={SimpleMarkdown} code={SimpleCode}>
                            <SimpleComponent/>
                        </CodeView>
                    </Col>
                    
                                </Row>

                                
                        <div style={docStyle}>
                            <CodeDoc code={SelectSourceCode} instance={SelectSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={OptionSourceCode} instance={OptionSource} />
                        </div>
                        
                        <div style={docStyle}>
                            <CodeDoc code={OptGroupSourceCode} instance={OptGroupSource} />
                        </div>
                        

                            </div>
                        )
                    }
                }
                