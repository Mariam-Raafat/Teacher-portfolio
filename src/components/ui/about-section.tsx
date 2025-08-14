import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const AboutSection = () => {
  const skills = [

    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "ألعاب تعليمية", 
      description: "ألعاب تفاعلية لتعليم اللغة العربية للأطفال"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "الالتزام بالمواعيد",
      description: "الالتزام بالمواعيد والتواصل الفعال مع أولياء الأمور"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "حسن التعامل مع أطفال التوحد",
      description: "تقديم الدعم والتوجيه لأطفال التوحد في تعلم اللغة العربية"
    }
  ];

  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ما يجب ان تعرفه <span className="gradient-text">عني</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            أسماء ضياء – معلمة لغة العربية 
           أؤمن أن التعليم رسالة سامية تصنع العقول وتبني القلوب قبل أن تنقل المعلومة. 
           أقدّم دروسي بأسلوب مبسط وشيق يربط المعرفة بحياة الطالب اليومية، ويحوّل التعلم إلى رحلة ممتعة مليئة بالحماس. أراعي الفروق الفردية، وأستخدم أساليب متنوعة تجمع بين الشرح العملي، والأنشطة التفاعلية، والألعاب التعليمية، والقراءة الهادفة، لضمان فهم أعمق وترسيخ المعلومة. رسالتي أن أزرع في طلابي حب التعلم، وثقة بالنفس، وإتقانًا نابعًا من الفهم لا من الحفظ، ليكونوا قادة الغد بعلمهم وأخلاقهم.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary/50 smooth-transition group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:animate-float">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-primary/10 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            هل ترغب في <span className="gradient-text">التواصل معي؟</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            يمكنك التواصل معي عبر البريد الإلكتروني أو من خلال وسائل التواصل الاجتماعي. 
            أنا هنا للإجابة على أي استفسارات أو لمناقشة فرص التعاون.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:Asmaadiaa2710@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 smooth-transition"
            >
              <Users className="w-5 h-5 mr-2" />
              تواصل معي عبر البريد الإلكتروني
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;