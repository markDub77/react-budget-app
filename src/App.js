import {
    Button,
    ButtonGroup,
    Container, FormGroup, FormInput,
    Grid,
    GridColumn,
    GridRow,
    Icon,
    Segment,
    Statistic,
    StatisticLabel,
    Form
} from "semantic-ui-react";
import './App.css';
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <Container>
        <MainHeader title='Budget' type='h1'/>
        <Statistic size='small'>
            <Statistic.Label>Your Balance</Statistic.Label>
            <Statistic.Value>2,267.53</Statistic.Value>
        </Statistic>

        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn>
                        <Statistic size='tiny' color='green'>
                            <StatisticLabel style={{textAlign: 'left'}}>
                                Income:
                            </StatisticLabel>
                            <Statistic.Value>2,267.53</Statistic.Value>
                        </Statistic>
                    </GridColumn>
                    <GridColumn>
                        <Statistic size='tiny' color='red'>
                            <StatisticLabel style={{textAlign: 'left'}}>
                                Expenses:
                            </StatisticLabel>
                            <Statistic.Value>267.53</Statistic.Value>
                        </Statistic>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>

        <MainHeader title='History' type='h3' />
        <Segment color='green'>
            <Grid columns={3} textAlign='right'>
                <GridColumn width={10} textAlign='left'>Something</GridColumn>
                <GridColumn width={3} textAlign='right'>$10.00</GridColumn>
                <GridColumn width={3}>
                    <Icon name='edit' bordered/>
                    <Icon name='trash' bordered/>
                </GridColumn>
            </Grid>
        </Segment>
        <MainHeader title='Add new transaction' type='h3' />
        <Form unstackable>
            <FormGroup>
                <FormInput
                    icon='tags'
                    width={12}
                    label='Description'
                    placeholder='New shinny thing'
                />
                <FormInput
                    width={4}
                    label='value'
                    placeholder='100.00'
                    icon='dollar'
                    iconPosition='left'
                ></FormInput>
                <ButtonGroup style={{ marginTop: 20 }}>
                    <Button>Cancel</Button>
                    <Button.Or />
                    <Button primary>Ok</Button>
                </ButtonGroup>
            </FormGroup>
        </Form>
    </Container>
  );
}

export default App;
