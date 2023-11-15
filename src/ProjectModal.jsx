import { useState } from "react";
import * as React from 'react';
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
    Box
} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function ProjectModal({ card }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid item key={card.title} xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardActionArea onClick={handleOpen}>
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
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {card.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Grid>
    );
}

export default ProjectModal

