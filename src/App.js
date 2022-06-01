import {
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Icon,
    Segment,
    Statistic,
    StatisticLabel
} from "semantic-ui-react";
import './App.css';

function App() {
  return (
    <Container>
        <Header as='h1'>Budget</Header>

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

        <Header as='h3'>History</Header>
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
    </Container>
  );
}

export default App;
