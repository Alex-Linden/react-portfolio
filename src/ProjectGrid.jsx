import React, { useState } from "react";
// import AppBar from '@mui/material/AppBar';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import {
    CardActionArea,
    Card,
    CardActions,
    Button,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Container,
    Modal,
    Box,
    CardHeader
} from "@mui/material";
// import CssBaseline from '@mui/material/CssBaseline';
// import Stack from '@mui/material/Stack';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Link from '@mui/material/Link';
import {
    ReactNative,
    jobly_company_list,
    jobly_home_page,
    tags_admin_page,
    tags_on_page,
    tags_search_example,
    Warbler_home_page,
    Warbler_landing_page,
} from './assets';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ProjectGrid() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [open, setOpen] = useState(false);
    const handleOpen = (curCard) => {
        setSelectedCard(curCard);
        setOpen(true);
    };
    const handleClose = () =>{
        setSelectedCard(null)
        setOpen(false);
    }
    let cards = [
        {
            title: "Rithm SIS Mobile app",
            image: ReactNative,
            shortSummary: "Mobile app built with React Native",
            media: []
        },
        {
            title: "Jobly",
            image: jobly_home_page,
            shortSummary: "Job listing search site built with React, Express, Node.js and PostgreSQL",
            media: [jobly_company_list]
        },
        {
            title: "Warbler",
            image: Warbler_landing_page,
            shortSummary: "Twitter clone built with Flask",
            media: [Warbler_home_page]
        },
        {
            title: "Rithm SIS Tags",
            image: tags_search_example,
            shortSummary: "Tagging feature built in Django to improve search",
            media: [tags_admin_page, tags_on_page]
        }
    ];


    return (

        <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card.title} xs={12} sm={6} md={4}>
                        <Card
                            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <CardActionArea onClick={()=>handleOpen(card)}>
                                <CardMedia
                                    component="div"
                                    sx={{
                                        // 16:9
                                        pt: '56.25%',
                                    }}
                                    image={card.image}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {card.title}
                                    </Typography>
                                    <Typography>
                                        {card.shortSummary}
                                    </Typography>
                                </CardContent>

                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card >
                        <CardHeader title={selectedCard?.title} />
                        {selectedCard?.media[0] &&
                        <CardMedia
                        component="img"
                        height="194"
                        image={selectedCard.media[0]}
                        alt="Paella dish"
                      />}
                    </Card>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Container>
    );

}
export default ProjectGrid;