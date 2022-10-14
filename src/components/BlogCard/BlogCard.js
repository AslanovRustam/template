import {
  Card,
  CardBody,
  CardHeader,
  CardPoster,
  CardText,
  CardTitle,
  CardFooter,
  Tag,
  Avatar,
  UserBox,
  UserInfo,
  UserName,
  Date,
} from './BlogCard.styled';
import { formatDateToNow } from '../../helper/formDateToNow';

// import { formatDistanceToNow } from 'date-fns';

export function BlogCard({
  poster,
  tag,
  title,
  description,
  userName,
  avatar,
  postedAt,
}) {
  // const formatDateToNow = el => {
  //   return formatDistanceToNow(new Date(el), { addSuffix: true });
  // };
  return (
    <Card>
      <CardHeader>
        <CardPoster src={poster} alt="card__image" />
      </CardHeader>
      <CardBody>
        <Tag>Technology</Tag>
        <CardTitle>What's new in 2022 Tech</CardTitle>
        <CardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
          atque quidem!
        </CardText>
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src="https://i.pravatar.cc/40?img=1" alt="Jane Doe" />
          <UserInfo>
            <UserName>{userName}</UserName>
            <Date>{formatDateToNow(postedAt)}</Date>
          </UserInfo>
        </UserBox>
      </CardFooter>
    </Card>
  );
}
