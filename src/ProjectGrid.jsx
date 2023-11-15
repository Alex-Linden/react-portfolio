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
    CardHeader,
    Link
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
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
    const handleClose = () => {
        setSelectedCard(null);
        setOpen(false);
    };
    let cards = [
        {
            title: "Rithm SIS Mobile app",
            image: ReactNative,
            shortSummary: "Mobile app built with React Native",
            media: [],
            longSummary: `<li>Designed serializer in Django application to return clean data for API call</li>
            <li>React-Native App</li>
            <li>Implemented Stack navigation nested inside of tab navigation</li>
            <li>Uses authentication </li>`,
            links: [{ text: "Github", url: "https://github.com/Alex-Linden/react-native-mobile-sis" }]
        },
        {
            title: "Jobly",
            image: jobly_home_page,
            shortSummary: "Job listing search site built with React, Express, Node.js and PostgreSQL",
            media: [jobly_company_list],
            longSummary: ` <li>Built job application and search site using React for frontend,
            Express and PostgreSQL as backend</li>
          <li>Express backend devised with full Test Driven Development cycle,
            maintaining 100% test coverage</li>
          <li>Designed and implemented component hierarchy for React frontend</li>
          <li>Utilized user token authentication combined with state and
            context hooks alongside local storage to enhance user experience</li>
          <li>Implemented live search using debounce with the Lodash library </li>`,
            links: [
                { text: "Demo", url: "https://wry-dolls.surge.sh/" },
                { text: "Github frontend", url: "https://github.com/Alex-Linden/react-jobly" },
                { text: "Github backend", url: "https://github.com/Alex-Linden/express-jobly" }]
        },
        {
            title: "Warbler",
            image: Warbler_landing_page,
            shortSummary: "Twitter clone built with Flask",
            media: [Warbler_home_page],
            longSummary: `<li>Engineered Twitter clone platform utilizing Python, Flask, PostgreSQL,
            and SQLAlchemy</li>
          <li>Added user authentication/authorization to RESTful API routes
            utilizing Bcrypt password hashing</li>
          <li>Managed many-to-many database relationships
            with Python ORM SQLAlchemy</li>`,
            links: [{ text: "Demo", url: "https://r26-alex-warbler.herokuapp.com/" }, { text: "Github", url: "https://github.com/Alex-Linden/Flask-warbler" }]
        },
        {
            title: "Rithm SIS Tags",
            image: tags_search_example,
            shortSummary: "Tagging feature built in Django to improve search",
            media: [tags_admin_page, tags_on_page],
            longSummary: `<li>Built a Tags feature in Django on SIS,
            allowing students and personnel to search for specific tags across 4 unique
            applications,
            tracking usage rate, while maintaining 100% test coverage</li>
          <li>Developed 2 new data models and added relationships to 4 existing data models.
            Incorporated tags into Watson search indexing, integrating add,
            edit and delete functionality to SIS administration for staff</li>`,
            links: [{ text: "Private Repo", url: null }]
        }
    ];


    return (
        <main>
            <Box>

                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                {/* <!-- Icon Divider--> */}
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><StarIcon /></div>
                    <div className="divider-custom-line"></div>
                </div>
            </Box>


            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card.title} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <CardActionArea onClick={() => handleOpen(card)}>
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
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                            <CardActions>
                                {selectedCard?.links.map((link) => (
                                    <Link
                                        key={`${selectedCard.title}-${link.text}`}
                                        href={link.url}
                                        underline="hover"
                                        target="_blank"
                                        rel="noopener"
                                    >{link.text}</Link>
                                ))}
                            </CardActions>
                        </Card>
                    </Box>
                </Modal>
            </Container>
        </main>
    );

}
export default ProjectGrid;