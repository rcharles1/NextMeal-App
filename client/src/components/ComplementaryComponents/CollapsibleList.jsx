
import Section from './Section';

const CollapsibleList= ({ mealDetails }) => {
  return (
    <div className="w-full ssm:text-base mx-auto text-default/75">
      <Section title="Nutritional Information" content={
        <ul className="mb-3 list-disc list-outside px-7 ">
          {Object.entries(mealDetails.nutritionalInfo).map(([key, value], index) => (
            <li key={index} className="mb-1 antialiased font-medium text-justify capitalize">{`${key}: ${value}`}</li>
          ))}
        </ul>
      }/>
      <Section title="History" content={
        <>
          <p className="antialiased font-medium text-justify leading-relaxed mb-2 indent-4 whitespace-pre text-wrap">{mealDetails.SpecialNotes.history.intro}.</p>
          <p className="antialiased font-medium text-justify leading-relaxed mb-2 whitespace-pre text-wrap">{mealDetails.SpecialNotes.history.body}</p>
          <p className="antialiased font-medium text-justify leading-relaxed mb-2 whitespace-pre text-wrap">{mealDetails.SpecialNotes.history.conclusion}</p>
        </>
      }/>
      <Section title="Cultural Merit" content={<p className="antialiased font-medium text-start leading-relaxed mb-2 whitespace-pre text-wrap">{mealDetails.SpecialNotes.culturalMerit}</p>}/>
    </div>
  );
};
  
  export default CollapsibleList;
  