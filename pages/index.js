import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
    address: "Some address",
    description: "this is first meetup",
  },
  {
    id: "m2",
    title: "second",
    image:
      "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
    address: "Some address",
    description: "this is second meetup",
  },
  {
    id: "m3",
    title: "third",
    image:
      "https://www.thebalancecareers.com/thmb/PsG0_bvGnJ-npJiq8RYiEO6WTT4=/3435x2576/smart/filters:no_upscale()/high-angle-view-of-lower-east-side-manhattan-downtown--new-york-city--usa-640006562-5ae52a273de423003776ae2e.jpg",
    address: "Some address",
    description: "this is third meetup",
  },
  {
    id: "m4",
    title: "fourth",
    image:
      "https://blog.politics.ox.ac.uk/wp-content/uploads/2020/10/future-city-scaled.jpg",
    address: "Some address",
    description: "this is fourth meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = (context) => {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1
  };
};

export default HomePage;
