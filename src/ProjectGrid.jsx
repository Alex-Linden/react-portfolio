import React, { useState, useRef, useEffect } from "react";
// import AppBar from '@mui/material/AppBar';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
import {
    CardActionArea,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    Container,
    Box,
    Link,
    Divider,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
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
    kinfolx_landing,
    kinfolx_after,
    kinfolx_before,
} from './assets';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ProjectGrid() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleOpen = (curCard) => {
        setSelectedCard(curCard);
        setOpen(true);
    };

    const handleClose = () => {
        setSelectedCard(null);
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    let cards = [
        {
            title: "Kinfolx",
            image: kinfolx_landing,
            shortSummary: "Rebuilt website for local coffee shop to improve key metrics and usability",
            media: [kinfolx_after, kinfolx_before],
            longSummary: [
                'Built using React',
                'Refactored website for local restaurant to improve usability',
                'Improved load times from several seconds to under a second via code splitting, image compression and lazy loading',
                'Improved lighthouse accessability score to 100',
                'Fixed broken links to menus and social media accounts',
                'Disclaimer: due to Kinfolx losing contact with previous developer deployment is on hold'],
            links: [
                { text: "Github", url: "https://github.com/Alex-Linden/kinfolx" },
            ]
        },
        {
            title: "Rithm SIS Mobile app",
            image: ReactNative,
            shortSummary: "Mobile app built with React Native",
            media: [],
            video: true,
            longSummary: [
                'Designed serializer in Django application to return clean data for API call',
                'React-Native App',
                'Implemented Stack navigation nested inside of tab navigation',
                'Uses authentication'],
            links: [{ text: "Github", url: "https://github.com/Alex-Linden/react-native-mobile-sis" }]
        },

        {
            title: "Jobly",
            image: jobly_home_page,
            shortSummary: "Job listing search site built with React, Express, Node.js and PostgreSQL",
            media: [jobly_company_list],
            longSummary: [
                'Built job application and search site using React for frontend,Express and PostgreSQL as backend',
                'Express backend devised with full Test Driven Development cycle,maintaining 100% test coverage',
                'Designed and implemented component hierarchy for React frontend',
                'Utilized user token authentication combined with state and context hooks alongside local storage to enhance user experience',
                'Implemented live search using debounce with the Lodash library',
            ],
            links: [
                { text: "Demo", url: "https://alex-jobly.netlify.app/" },
                { text: "Github frontend", url: "https://github.com/Alex-Linden/react-jobly" },
                { text: "Github backend", url: "https://github.com/Alex-Linden/express-jobly" }]
        },
        {
            title: "Warbler",
            image: Warbler_landing_page,
            shortSummary: "Twitter clone built with Flask",
            media: [Warbler_home_page],
            longSummary: [
                'Engineered Twitter clone platform utilizing Python, Flask, PostgreSQL, and SQLAlchemy',
                'Added user authentication/authorization to RESTful API routes utilizing Bcrypt password hashing',
                'Managed many-to-many database relationships with Python ORM SQLAlchemy',
            ],
            links: [{ text: "Demo", url: "https://r26-alex-warbler.herokuapp.com/" }, { text: "Github", url: "https://github.com/Alex-Linden/Flask-warbler" }]
        },
        {
            title: "Rithm SIS Tags",
            image: tags_search_example,
            shortSummary: "Tagging feature built in Django to improve search",
            media: [tags_admin_page, tags_on_page],
            longSummary: [
                `Built a Tags feature in Django on SIS, allowing students and personnel to search for specific tags across 4 unique
            applications,
            tracking usage rate, while maintaining 100% test coverage`,
                `Developed 2 new data models and added relationships to 4 existing data models.
            Incorporated tags into Watson search indexing, integrating add,
            edit and delete functionality to SIS administration for staff`,
            ],
            links: [{ text: "Private Repo", url: null }]
        }
    ];


    return (
        <main>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 4,
                }}
            >
                <Container maxWidth="sm">
                    <Typography
                        component="h2"
                        variant="h3"
                        align="center"
                        color="text.primary"
                    >
                        PROJECTS
                    </Typography>
                    <Divider role="presentation"><StarIcon /></Divider>
                </Container>
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
            </Container>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogTitle id="scroll-dialog-title">{selectedCard?.title}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    {selectedCard?.media[0] &&
                        <DialogContent>
                            {selectedCard.media.map((img, idx) => (
                                <CardMedia
                                key={`${selectedCard.title}-image-${idx}`}
                                component="img"
                                height="194"
                                image={img}
                                alt={`${selectedCard.title}-image-${idx}`}
                                sx={{objectPosition: '0% 0%', pb:1}}
                            />
                            ))}

                        </DialogContent>}
                    {selectedCard?.video &&
                        <DialogContent
                        align="center">
                            <iframe
                                width="315"
                                height="560"
                                src="https://youtube.com/embed/jQzYFQ0SgSU"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture;web-share"
                                allowfullscreen>
                            </iframe>
                        </DialogContent>

                    }
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        <ul>

                            {selectedCard?.longSummary.map((line, idx) => (

                                <Typography key={idx} id="modal-modal-description" sx={{ mt: 2 }}>
                                    {line}
                                </Typography>
                            ))}
                        </ul>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {selectedCard?.links.map((link) => (
                        <Link
                            key={`${selectedCard.title}-${link.text}`}
                            href={link.url}
                            underline="hover"
                            target="_blank"
                            rel="noopener"
                        >{link.text}</Link>
                    ))}
                </DialogActions>
            </Dialog >
        </main >
    );

}
export default ProjectGrid;