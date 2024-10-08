import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type FormData = {
  [key: string]: string;
};

const questions = [
  "How long does it typically take for your team to respond to customer inquiries?",
  "How many records can your current system process per hour?",
  "What is the approximate error rate in your current data processing or customer service operations?",
  "How would you describe the scalability of your current systems?",
  "How are your current systems integrated?",
  "How often are you able to generate comprehensive reports on your business operations?",
  "Which area of your business do you believe would benefit most from automation?",
  "What are the biggest challenges you face with your current systems?",
  "What is your estimated budget range for systems automation and improvement?",
  "What is your desired timeline for implementing new automated systems?"
];

const Questionnaire: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    localStorage.setItem('questionnaireData', JSON.stringify(data));
    navigate('/audit');
  };

  return (
    <div className="bg-white shadow rounded-lg p-6 max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Systems Automation Readiness Questionnaire</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {questions.map((question, index) => (
          <div key={index}>
            <label className="block mb-2">{`${index + 1}. ${question}`}</label>
            {index === 7 ? (
              <input 
                {...register(`question_${index}`, { required: true })} 
                className="w-full p-2 border rounded" 
                placeholder="E.g., Slow response times, Limited scalability"
              />
            ) : (
              <select {...register(`question_${index}`, { required: true })} className="w-full p-2 border rounded">
                <option value="">Select an option</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            )}
            {errors[`question_${index}`] && <span className="text-red-500">This field is required</span>}
          </div>
        ))}
        <div>
          <label className="block mb-2">11. Additional Comments:</label>
          <textarea 
            {...register('additional_comments')} 
            className="w-full p-2 border rounded" 
            rows={4}
            placeholder="Please provide any additional information or specific requirements for your systems automation project"
          ></textarea>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Submit
        </button>
      </form>
      <div className="mt-4 text-center text-sm text-gray-600">
        <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a> | <a href="#" className="text-blue-500 hover:underline">Terms of Service</a>
      </div>
    </div>
  );
};

export default Questionnaire;