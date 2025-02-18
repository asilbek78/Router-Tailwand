import { Link } from "react-router-dom"
Link
function SecondPage() {
  return (
    <>
      <br />
      <h1 className="text-3xl font-medium text-green-600 flex justify-center">
        SecondPage ga xush kelibsiz!
      </h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        dignissimos placeat magnam quidem velit amet rerum est, veniam
        cupiditate similique, et ex aliquam, molestiae incidunt omnis eligendi
        consequuntur vel commodi. Nemo, atque nam dolore molestiae optio nobis
        voluptatum aperiam velit libero? Veritatis quo aut vero veniam
        voluptates error! Excepturi, aliquid. Neque dolore voluptas vel tempore,
        voluptate eligendi cumque repellendus eaque! Libero, soluta cumque ipsa
        fugit id aut pariatur repellendus beatae eum debitis quisquam molestias
        illum, minus ad modi recusandae et eveniet quaerat molestiae tempora
        distinctio. Illo modi a odio. Omnis, recusandae quasi! Voluptatum,
        molestiae. Tempore ratione dolore architecto laborum.
      </p>
      <Link to={'/navbar'} className="text-2xl text-emerald-600">Ortga qaytish</Link>
    </>
  )
}

export default SecondPage
