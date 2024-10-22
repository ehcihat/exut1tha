import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import WhatsappIcon from '@mui/icons-material/Whatsapp';
import TelegramIcon from '@mui/icons-material/Telegram';
import Box from '@mui/material/Box';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Snackbar } from '@mui/material/';
import { IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';


const CustomCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    width: 1300,
    height: 550,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'space-between',
    justifyContent: 'space-between',
}));

function Noticia({ noticia }) {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(noticia.likesCount || 0);
    const [openModal, setOpenModal] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [sharePlatform, setSharePlatform] = useState('');
    const handleLike = () => {
        setLiked(!liked);
        setLikesCount(liked ? likesCount - 1 : likesCount + 1);
    }
    const handleShareClick = (platform) => {
        setSharePlatform(platform);
        setLikesCount(likesCount - 1);
        setLiked(!liked);
        setOpenSnackbar(true);
        setOpenModal(false);
    }
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    }

    
    return (
        <CustomCard >
            <CardContent >

                <CardMedia
                    component="img"
                    image={noticia.avatar}

                    sx={{ width: '100%', height: 100, width: 100 }}
                />

                <Typography variant='h5' component='h2' textAlign="center" gutterBottom>
                    {noticia.title}.
                </Typography>
                <Typography variant='subtitle1' textAlign="center" sx={{ fontWeight: 'bold' }}>

                    {noticia.atribute}
                </Typography>


                <MoreVertIcon></MoreVertIcon>
            </CardContent>



            <CardMedia

                component="img"
                image={noticia.imageUrl}
                alt={noticia.title}
                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
            />
            <Typography variant='body2' sx={{ marginTop: 1, textAlign: 'center' }}>
                {noticia.description}
            </Typography>
            <CardActions >
                <IconButton onClick={handleLike}>
                    <Typography variant='body2'> {likesCount}</Typography>
                    {liked ? <FavoriteIcon color="primary" /> : <FavoriteBorder />}

                </IconButton>
                <Box>
                    <IconButton onClick={() => setOpenModal(true)} disabled={!liked}>
                        <ShareIcon />
                    </IconButton>
                </Box>

                <Dialog open={openModal} onClose={() => setOpenModal(false)}
               
                    disableEscapeKeyDown
                    >
                    <DialogTitle>Compartir</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            ¿A través de qué plataforma quieres compartir?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <IconButton onClick={() => handleShareClick('WhatsApp')}>
                            <WhatsappIcon />
                        </IconButton>

                        <IconButton onClick={() => handleShareClick('Telegram')}>
                            <TelegramIcon />
                        </IconButton>

                    </DialogActions>
                </Dialog>
                <Snackbar
                    open={openSnackbar}
                    onClose={handleCloseSnackbar}
                    message={`Enviando por ${sharePlatform}`}
                    autoHideDuration={2000}
                />
            </CardActions>
        </CustomCard>

    );
}

export default Noticia;