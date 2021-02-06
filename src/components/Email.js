import { useForm } from "react-hook-form";

const Email = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data, r) => {
    alert(`Thank you for your message from ${data.email}`);
    const templateId = "template_su87tmo";
    const serviceID = "service_xd6zksg";
    sendFeedback(serviceID, templateId, {
      from_name: data.name,
      message_html: data.comment,
      reply_to: data.email,
    });
    r.target.reset();
  };

  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) =>
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
      );
  };

  return (
    <div class="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">
      <div class="text-3xl mb-6 text-center ">Ready to build your website?</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="grid grid-cols-2 gap-4 max-w-xl m-auto">
          <div class="col-span-2 lg:col-span-1">
            <input
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              name="name"
              placeholder="Name"
              ref={register({
                required: "Please enter your name",
                maxLength: {
                  value: 20,
                  message: "Please enter a name with fewer than 20 characters",
                },
              })}
            />
          </div>
          {errors.name && errors.name.message}
          <div class="col-span-2 lg:col-span-1">
            <input
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              name="email"
              placeholder="Email Address"
              ref={register({
                required: "Please enter an email",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
          </div>
          {errors.email && errors.email.message}
          <div class="col-span-2">
            <textarea
              cols="30"
              rows="8"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Message"
              name="comment"
              ref={register({
                required: true,
              })}
            />
          </div>
          {errors.comment && "oops, you forgot your message!"}
          <div class="col-span-2 text-right">
            <input
              className="py-3 px-6 bg-yellow-500 hover:bg-yellow-300 text-white font-bold w-full sm:w-32"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Email;
