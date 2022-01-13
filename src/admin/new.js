import data from "../data";
const handle = {
    render() {
        const result = data.map(({
            id,
            title,
            img,
            desc,
        }) => {
            return /*html*/ `<tr>
          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div class="flex items-center">
                  <div class="flex-shrink-0 w-10 h-10">
                      <img class="w-10 h-10 rounded-full"
                          src="${img}"
                          alt="admin dashboard ui">
                  </div>
              </div>
          </td>

          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <div class="text-sm leading-5 text-gray-500">${title}</div>
          </td>

          <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              ${desc}
          </td>

          <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
              <a href="/admin/news/:${id}/edit">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              </a>
          </td>
          <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
              <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              </a>
          </td>
      </tr>`
        }).join('');
        return result;
    }
};
const NewListstudent = {
    render() {
        return /*html*/ `
      <!-- This example requires Tailwind CSS v2.0+ -->
<div class="container mx-auto">
  <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto ">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          
          <tbody class="bg-white divide-y divide-gray-200">
            ${handle.render()}
  
            <!-- More people... -->
          </tbody>
        </table>
        </div>
        <td class=" px-6 py-4 whitespace-no-wrap border-b border-gray-200">
        <a href="/admin/news/add">
              <span
                  class="mt-2 inline-flex px-6 py-2 text-xs font-semibold leading-5 text-green-800 bg-green-300 rounded-full">ADD NEW</span>
                  </a>
          </td>
    </div>
  </div>
  </div>
</div>
`
    }
};
export default NewListstudent;