import { Menu, Search } from "@mui/icons-material"
import { Grid, IconButton, Typography } from "@mui/material"

const Header = ({title}) => {
    return (
        <Grid container spacing={2} columns={12}>
            <Grid item xs={2}>
                <IconButton size="large">
                    <Menu />
                </IconButton>
            </Grid>
            <Grid item xs={8}>
            <Typography variant="h5">{title}</Typography>
            </Grid>
            <Grid item xs={2}>
                <IconButton size="large">
                    <Search />
                </IconButton>
            </Grid>
        </Grid>
    )
}

export default Header