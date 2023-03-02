import Card from "../Card/Profile";
// import CardBody from "../Card/CardBody";
// import CardHeader from "../Card/CardHeader";
// import CardPoster from "../Card/CardPoster";
// import CardText from "../Card/CardText";
// import CardTitle from "../Card/CardTitle";
// import Tag from "../Tag";
// import CardFooter from "../Card/CardFooter";
// import UserBox from "../UserBox";
// import Avatar from "../Avatar";
// import UserInfo from "../UserInfo";

const BlogCard = () => {
  return (
    <Profile>






      <CardHeader>
        <CardPoster
          src="https://source.unsplash.com/600x400/?computer"
          alt="card__image"
          vasya="123"
        />
      </CardHeader>
      <CardBody>
        <Tag tag="Technology" />
        <CardTitle title="What's new in 2022 Tech" />
        <CardText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
          atque quidem!"
        />
      </CardBody>
      <CardFooter>
        <UserBox>
          <Avatar src="https://i.pravatar.cc/40?img=1" alt="Jane Doe" />
          <UserInfo />
        </UserBox>
      </CardFooter>
    </Profile>
  );
};

export default BlogCard;

{/* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div> */}
