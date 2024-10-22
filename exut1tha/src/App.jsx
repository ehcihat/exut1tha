import Noticia from './components/Noticia';
import { ListItem, Grid2} from '@mui/material';

function App() {
  const noticias = [{
    id: 0,
    avatar: '/avatar01.png',
    title: 'Título 1',
    atribute: '19 de octubre de 2024',
    imageUrl: '/sky.jpg',
    imageSize: 150,
    likesCount: 12,
    description: 'Titulo 1, es decir la primera noticia que aparece.',
  },
  {
    id: 1,
    avatar: '/avatar02.png',
    title: 'Título 2',
    atribute: '19 de octubre de 2024',
    imageUrl: '/sea.jpg',
    imageSize: 150,
    likesCount: 20,
    description: 'Titulo 2, es decir la segunda noticia que aparece.',
  },
  {
    id: 2,
    avatar: '/avatar03.png',
    title: 'Título 3',
    atribute: '19 de octubre de 2024',
    imageUrl: '/tux.jpg',
    likesCount: 31,
    imageSize: 150,
    description: 'Titulo 3, es decir la tercera noticia que aparece.',
  },
  {
    id: 3,
    avatar: '/avatar04.png',
    title: 'Título 4',
    atribute: '19 de octubre de 2024',
    imageUrl: '/mario.jpg',
    likesCount: 143,
    imageSize: 150,
    description: 'Marco Antonio fue un grande.​ Jugó un papel fundamental en la transformación de la República romana.',
  }];

  return (
    <Grid2
      container
      display='flex'
      spacing={0}
      alignItems="center"
      justifyContent="center"
      width="100vw"
    >
      <Grid2>
        {noticias.map((noticia) => (
          <ListItem key={noticia.id}>
            <Noticia noticia={noticia} />
          </ListItem>
        ))}
      </Grid2>

    </Grid2>
  );
}

export default App;
