import React, { useState } from 'react'
import "./App.css"
import TextField from '@material-ui/core/TextField';
import { Button, Card, CardActions, CardContent, Grid, MenuItem, Select, Typography } from '@material-ui/core';

const App = () => {

    const type = ['None', 'Marketer', 'Programmer', 'Designer', 'Content Writer']
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    const [pos, setPos] = useState(type[0])

    return (
        <div>
            <div className="container">
                <div className="form">
                    <form className="input-form" noValidate autoComplete="off">
                        <TextField id="outlined-basic" className="input" label="Outlined" variant="outlined" />
                        <TextField id="outlined-basic" className="input" label="Outlined" variant="outlined" />
                        <Select
                            labelId="demo-simple-select-label"
                            className="input"
                            id="demo-simple-select"
                            value={pos}
                            onChange={(e) => setPos(e.target.value)}
                        >
                            {type.map(t => (
                                <MenuItem value={t}>{t}</MenuItem>
                            ))}
                        </Select>
                        <Button variant="contained" color="primary"
                            style={{ marginTop: '20px' }}>
                            Submit
                        </Button>
                    </form>
                </div>

                <div className="data">
                    <Grid container spacing={2}>
                        {cards.map(c => (
                            <Card className='cards'>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        Word of the Day
                                </Typography>
                                    <Typography variant="h5" component="h2">
                                        be
                                </Typography>
                                    <Typography color="textSecondary">
                                        adjective
                                </Typography>
                                    <Typography variant="body2" component="p">
                                        well meaning and kindly.
                                <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Grid>

                </div>
            </div>
        </div>
    )
}

export default App
