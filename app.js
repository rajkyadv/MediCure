const sampleReport = `COMPLETE BLOOD COUNT (CBC)
Haemoglobin: 10.2 g/dL  Reference Range: 12.0 - 15.0  LOW
Total WBC Count: 7,400 /cumm  Reference Range: 4,000 - 11,000
Platelet Count: 2.35 lakh/cumm  Reference Range: 1.5 - 4.5

DIABETES PROFILE
Fasting Blood Sugar: 132 mg/dL  Reference Range: 70 - 100  HIGH
HbA1c: 6.4 %  Reference Range: 4.0 - 5.6  HIGH

LIPID PROFILE
Total Cholesterol: 218 mg/dL  Desirable: Below 200  HIGH
HDL Cholesterol: 48 mg/dL  Reference Range: 40 - 60
LDL Cholesterol: 138 mg/dL  Optimal: Below 100  HIGH`;

const languages = {
  hi: {
    label: "हिन्दी", locale: "hi-IN", font: "Noto Sans Devanagari",
    intro: "रिपोर्ट में {count} मुख्य जाँच परिणाम मिले। {abnormal} परिणाम सामान्य सीमा से बाहर चिह्नित हैं। नीचे दिए गए मूल्यों को अपनी रिपोर्ट से मिलाएँ और डॉक्टर से चर्चा करें।",
    noFindings: "रिपोर्ट का पाठ पढ़ा गया, लेकिन सामान्य जाँच परिणाम स्पष्ट रूप से नहीं मिले। कृपया मूल रिपोर्ट डॉक्टर को दिखाएँ।",
    normal: "सामान्य", high: "अधिक", low: "कम", recorded: "दर्ज",
    precautions: {
      general: "पर्याप्त पानी पिएँ, नियमित भोजन करें और डॉक्टर की सलाह के बिना दवा न बदलें।",
      glucose: "मीठे पेय और अधिक चीनी वाले भोजन सीमित रखें। रक्त शर्करा के बारे में डॉक्टर से चर्चा करें।",
      haemoglobin: "आयरन युक्त भोजन लें; आयरन की गोली केवल डॉक्टर की सलाह पर लें।",
      cholesterol: "तले हुए भोजन और ट्रांस फैट सीमित करें; डॉक्टर की अनुमति से नियमित शारीरिक गतिविधि करें।",
      urgent: "कुछ मान बहुत असामान्य हो सकते हैं। आज ही डॉक्टर या नजदीकी आपातकालीन सेवा से संपर्क करें।"
    }
  },
  bn: {
    label: "বাংলা", locale: "bn-IN", font: "Noto Sans Bengali",
    intro: "রিপোর্টে {count}টি প্রধান পরীক্ষার ফল পাওয়া গেছে। {abnormal}টি ফল স্বাভাবিক সীমার বাইরে চিহ্নিত। নিচের মানগুলি মূল রিপোর্টের সঙ্গে মিলিয়ে চিকিৎসকের সঙ্গে আলোচনা করুন।",
    noFindings: "রিপোর্টের লেখা পড়া হয়েছে, কিন্তু পরিচিত পরীক্ষার ফল স্পষ্টভাবে পাওয়া যায়নি। মূল রিপোর্টটি চিকিৎসককে দেখান।",
    normal: "স্বাভাবিক", high: "বেশি", low: "কম", recorded: "নথিভুক্ত",
    precautions: {
      general: "পর্যাপ্ত জল পান করুন, নিয়মিত খাবার খান এবং চিকিৎসকের পরামর্শ ছাড়া ওষুধ পরিবর্তন করবেন না।",
      glucose: "মিষ্টি পানীয় ও অতিরিক্ত চিনিযুক্ত খাবার সীমিত করুন। রক্তে শর্করা নিয়ে চিকিৎসকের সঙ্গে কথা বলুন।",
      haemoglobin: "আয়রনসমৃদ্ধ খাবার খান; শুধু চিকিৎসকের পরামর্শে আয়রন সাপ্লিমেন্ট নিন।",
      cholesterol: "ভাজা খাবার ও ট্রান্স ফ্যাট সীমিত করুন; চিকিৎসকের অনুমতি নিয়ে নিয়মিত শরীরচর্চা করুন।",
      urgent: "কিছু মান অত্যন্ত অস্বাভাবিক হতে পারে। আজই চিকিৎসক বা নিকটবর্তী জরুরি পরিষেবার সঙ্গে যোগাযোগ করুন।"
    }
  },
  ta: {
    label: "தமிழ்", locale: "ta-IN", font: "Noto Sans Tamil",
    intro: "அறிக்கையில் {count} முக்கிய பரிசோதனை முடிவுகள் கண்டறியப்பட்டன. {abnormal} முடிவுகள் இயல்பான வரம்பிற்கு வெளியே குறிக்கப்பட்டுள்ளன. கீழே உள்ள மதிப்புகளை அசல் அறிக்கையுடன் சரிபார்த்து மருத்துவரிடம் ஆலோசிக்கவும்.",
    noFindings: "அறிக்கையின் உரை படிக்கப்பட்டது, ஆனால் பொதுவான பரிசோதனை முடிவுகள் தெளிவாகக் கிடைக்கவில்லை. அசல் அறிக்கையை மருத்துவரிடம் காட்டவும்.",
    normal: "இயல்பு", high: "அதிகம்", low: "குறைவு", recorded: "பதிவு",
    precautions: {
      general: "போதுமான தண்ணீர் குடித்து, ஒழுங்காக உணவு உண்ணுங்கள். மருத்துவரின் ஆலோசனையின்றி மருந்தை மாற்ற வேண்டாம்.",
      glucose: "இனிப்பு பானங்கள் மற்றும் அதிக சர்க்கரை உணவுகளைக் கட்டுப்படுத்துங்கள். இரத்த சர்க்கரை குறித்து மருத்துவரிடம் பேசுங்கள்.",
      haemoglobin: "இரும்புச்சத்து நிறைந்த உணவுகளை உண்ணுங்கள்; மருத்துவரின் ஆலோசனையுடன் மட்டுமே இரும்புச்சத்து மாத்திரை எடுத்துக்கொள்ளுங்கள்.",
      cholesterol: "வறுத்த உணவு மற்றும் டிரான்ஸ் கொழுப்பைக் கட்டுப்படுத்துங்கள்; மருத்துவர் அனுமதியுடன் தொடர்ந்து உடற்பயிற்சி செய்யுங்கள்.",
      urgent: "சில மதிப்புகள் மிகவும் அசாதாரணமாக இருக்கலாம். இன்றே மருத்துவர் அல்லது அருகிலுள்ள அவசர சேவையைத் தொடர்புகொள்ளுங்கள்."
    }
  },
  ml: {
    label: "മലയാളം", locale: "ml-IN", font: "Noto Sans Malayalam",
    intro: "റിപ്പോർട്ടിൽ {count} പ്രധാന പരിശോധനാ ഫലങ്ങൾ കണ്ടെത്തി. {abnormal} ഫലങ്ങൾ സാധാരണ പരിധിക്ക് പുറത്താണെന്ന് അടയാളപ്പെടുത്തിയിരിക്കുന്നു. താഴെയുള്ള മൂല്യങ്ങൾ യഥാർത്ഥ റിപ്പോർട്ടുമായി ഒത്തുനോക്കി ഡോക്ടറുമായി ചർച്ച ചെയ്യുക.",
    noFindings: "റിപ്പോർട്ടിലെ വാചകം വായിച്ചു, പക്ഷേ സാധാരണ പരിശോധനാ ഫലങ്ങൾ വ്യക്തമായി കണ്ടെത്താനായില്ല. യഥാർത്ഥ റിപ്പോർട്ട് ഡോക്ടറെ കാണിക്കുക.",
    normal: "സാധാരണം", high: "കൂടിയത്", low: "കുറഞ്ഞത്", recorded: "രേഖപ്പെടുത്തി",
    precautions: {
      general: "ആവശ്യത്തിന് വെള്ളം കുടിക്കുക, ക്രമമായി ഭക്ഷണം കഴിക്കുക, ഡോക്ടറുടെ ഉപദേശമില്ലാതെ മരുന്ന് മാറ്റരുത്.",
      glucose: "മധുരപാനീയങ്ങളും പഞ്ചസാര കൂടുതലുള്ള ഭക്ഷണവും പരിമിതപ്പെടുത്തുക. രക്തത്തിലെ പഞ്ചസാരയെക്കുറിച്ച് ഡോക്ടറോട് സംസാരിക്കുക.",
      haemoglobin: "ഇരുമ്പ് അടങ്ങിയ ഭക്ഷണം കഴിക്കുക; ഡോക്ടറുടെ നിർദേശപ്രകാരം മാത്രം അയൺ സപ്ലിമെന്റ് കഴിക്കുക.",
      cholesterol: "വറുത്ത ഭക്ഷണവും ട്രാൻസ് ഫാറ്റും പരിമിതപ്പെടുത്തുക; ഡോക്ടറുടെ അനുമതിയോടെ പതിവായി വ്യായാമം ചെയ്യുക.",
      urgent: "ചില മൂല്യങ്ങൾ വളരെ അസാധാരണമായിരിക്കാം. ഇന്ന് തന്നെ ഡോക്ടറെയോ അടുത്തുള്ള അടിയന്തര സേവനത്തെയോ ബന്ധപ്പെടുക."
    }
  }
};

const testNames = {
  haemoglobin: { hi: "हीमोग्लोबिन", bn: "হিমোগ্লোবিন", ta: "ஹீமோகுளோபின்", ml: "ഹീമോഗ്ലോബിൻ" },
  hemoglobin: { hi: "हीमोग्लोबिन", bn: "হিমোগ্লোবিন", ta: "ஹீமோகுளோபின்", ml: "ഹീമോഗ്ലോബിൻ" },
  "fasting blood sugar": { hi: "खाली पेट रक्त शर्करा", bn: "খালি পেটে রক্তে শর্করা", ta: "வெறும் வயிற்று இரத்த சர்க்கரை", ml: "ഫാസ്റ്റിംഗ് രക്തത്തിലെ പഞ്ചസാര" },
  glucose: { hi: "रक्त शर्करा", bn: "রক্তে শর্করা", ta: "இரத்த சர்க்கரை", ml: "രക്തത്തിലെ പഞ്ചസാര" },
  hba1c: { hi: "HbA1c (औसत रक्त शर्करा)", bn: "HbA1c (গড় রক্তে শর্করা)", ta: "HbA1c (சராசரி இரத்த சர்க்கரை)", ml: "HbA1c (ശരാശരി രക്തത്തിലെ പഞ്ചസാര)" },
  "total cholesterol": { hi: "कुल कोलेस्ट्रॉल", bn: "মোট কোলেস্টেরল", ta: "மொத்த கொலஸ்ட்ரால்", ml: "ആകെ കൊളസ്ട്രോൾ" },
  "hdl cholesterol": { hi: "HDL कोलेस्ट्रॉल", bn: "HDL কোলেস্টেরল", ta: "HDL கொலஸ்ட்ரால்", ml: "HDL കൊളസ്ട്രോൾ" },
  "ldl cholesterol": { hi: "LDL कोलेस्ट्रॉल", bn: "LDL কোলেস্টেরল", ta: "LDL கொலஸ்ட்ரால்", ml: "LDL കൊളസ്ട്രോൾ" },
  "total wbc count": { hi: "कुल सफेद रक्त कोशिका गणना", bn: "মোট শ্বেত রক্তকণিকা", ta: "மொத்த வெள்ளை இரத்த அணுக்கள்", ml: "ആകെ വെളുത്ത രക്താണുക്കൾ" },
  "wbc count": { hi: "सफेद रक्त कोशिका गणना", bn: "শ্বেত রক্তকণিকা", ta: "வெள்ளை இரத்த அணுக்கள்", ml: "വെളുത്ത രക്താണുക്കൾ" },
  "platelet count": { hi: "प्लेटलेट गणना", bn: "প্লেটলেট সংখ্যা", ta: "தட்டணுக்கள் எண்ணிக்கை", ml: "പ്ലേറ്റ്ലെറ്റ് എണ്ണം" },
  tsh: { hi: "TSH (थायरॉइड)", bn: "TSH (থাইরয়েড)", ta: "TSH (தைராய்டு)", ml: "TSH (തൈറോയ്ഡ്)" },
  creatinine: { hi: "क्रिएटिनिन", bn: "ক্রিয়েটিনিন", ta: "கிரியேட்டினின்", ml: "ക്രിയാറ്റിനിൻ" },
  potassium: { hi: "पोटैशियम", bn: "পটাশিয়াম", ta: "பொட்டாசியம்", ml: "പൊട്ടാസ്യം" }
};

const testPurposes = {
  haemoglobin: ["यह बताता है कि रक्त शरीर में ऑक्सीजन कितनी अच्छी तरह पहुँचा सकता है।", "এটি জানায় রক্ত শরীরে কতটা ভালোভাবে অক্সিজেন পৌঁছাতে পারে।", "இரத்தம் உடலுக்கு ஆக்சிஜனை எவ்வளவு நன்றாக எடுத்துச் செல்கிறது என்பதை இது காட்டுகிறது.", "രക്തത്തിന് ശരീരത്തിലേക്ക് ഓക്സിജൻ എത്ര നന്നായി എത്തിക്കാനാകുമെന്ന് ഇത് കാണിക്കുന്നു."],
  hemoglobin: ["यह बताता है कि रक्त शरीर में ऑक्सीजन कितनी अच्छी तरह पहुँचा सकता है।", "এটি জানায় রক্ত শরীরে কতটা ভালোভাবে অক্সিজেন পৌঁছাতে পারে।", "இரத்தம் உடலுக்கு ஆக்சிஜனை எவ்வளவு நன்றாக எடுத்துச் செல்கிறது என்பதை இது காட்டுகிறது.", "രക്തത്തിന് ശരീരത്തിലേക്ക് ഓക്സിജൻ എത്ര നന്നായി എത്തിക്കാനാകുമെന്ന് ഇത് കാണിക്കുന്നു."],
  bloodSugar: ["यह जाँच रक्त में ग्लूकोज़ की मात्रा बताती है, जो शरीर की मुख्य ऊर्जा है।", "এই পরীক্ষা রক্তে গ্লুকোজের পরিমাণ জানায়, যা শরীরের প্রধান শক্তির উৎস।", "உடலின் முக்கிய ஆற்றலான குளுக்கோஸ் இரத்தத்தில் எவ்வளவு உள்ளது என்பதை இது காட்டுகிறது.", "ശരീരത്തിന്റെ പ്രധാന ഊർജസ്രോതസ്സായ ഗ്ലൂക്കോസ് രക്തത്തിൽ എത്രയുണ്ടെന്ന് ഇത് കാണിക്കുന്നു."],
  hba1c: ["यह पिछले लगभग 2–3 महीनों की औसत रक्त शर्करा का संकेत देता है।", "এটি গত প্রায় ২–৩ মাসের গড় রক্তে শর্করার ধারণা দেয়।", "கடந்த சுமார் 2–3 மாதங்களின் சராசரி இரத்த சர்க்கரையை இது காட்டுகிறது.", "കഴിഞ്ഞ ഏകദേശം 2–3 മാസത്തെ ശരാശരി രക്തത്തിലെ പഞ്ചസാര ഇത് സൂചിപ്പിക്കുന്നു."],
  cholesterol: ["यह रक्त में वसा के स्तर को मापता है, जो हृदय और रक्त वाहिकाओं के स्वास्थ्य से जुड़ा है।", "এটি রক্তের চর্বির মাত্রা মাপে, যা হৃদযন্ত্র ও রক্তনালির স্বাস্থ্যের সঙ্গে সম্পর্কিত।", "இதயம் மற்றும் இரத்த நாளங்களின் ஆரோக்கியத்துடன் தொடர்புடைய இரத்தக் கொழுப்பை இது அளவிடுகிறது.", "ഹൃദയത്തിന്റെയും രക്തക്കുഴലുകളുടെയും ആരോഗ്യവുമായി ബന്ധപ്പെട്ട രക്തത്തിലെ കൊഴുപ്പ് ഇത് അളക്കുന്നു."],
  wbc: ["ये कोशिकाएँ शरीर को संक्रमण से लड़ने में मदद करती हैं।", "এই কোষগুলি শরীরকে সংক্রমণের বিরুদ্ধে লড়তে সাহায্য করে।", "இந்த அணுக்கள் உடல் தொற்றை எதிர்த்துப் போராட உதவுகின்றன.", "ഈ കോശങ്ങൾ ശരീരത്തെ അണുബാധയ്‌ക്കെതിരെ പോരാടാൻ സഹായിക്കുന്നു."],
  platelets: ["प्लेटलेट चोट लगने पर रक्त का थक्का बनाने और खून रोकने में मदद करते हैं।", "প্লেটলেট আঘাতের পরে রক্ত জমাট বাঁধতে ও রক্তপাত বন্ধ করতে সাহায্য করে।", "காயம் ஏற்பட்டால் இரத்தம் உறைந்து இரத்தப்போக்கை நிறுத்த தட்டணுக்கள் உதவுகின்றன.", "പരിക്കേറ്റാൽ രക്തം കട്ടപിടിക്കാനും രക്തസ്രാവം നിർത്താനും പ്ലേറ്റ്ലെറ്റുകൾ സഹായിക്കുന്നു."],
  tsh: ["यह जाँच बताती है कि थायरॉइड ग्रंथि को नियंत्रित करने वाला हार्मोन किस स्तर पर है।", "এই পরীক্ষা থাইরয়েড নিয়ন্ত্রণকারী হরমোনের মাত্রা জানায়।", "தைராய்டைக் கட்டுப்படுத்தும் ஹார்மோனின் அளவை இது காட்டுகிறது.", "തൈറോയ്ഡിനെ നിയന്ത്രിക്കുന്ന ഹോർമോണിന്റെ അളവ് ഇത് കാണിക്കുന്നു."],
  creatinine: ["यह अपशिष्ट पदार्थ है; इसका स्तर गुर्दे के काम करने के बारे में संकेत दे सकता है।", "এটি একটি বর্জ্য পদার্থ; এর মাত্রা কিডনি কীভাবে কাজ করছে তার ইঙ্গিত দিতে পারে।", "இது ஒரு கழிவுப்பொருள்; இதன் அளவு சிறுநீரக செயல்பாட்டைக் குறிக்கலாம்.", "ഇത് ഒരു മാലിന്യവസ്തുവാണ്; ഇതിന്റെ അളവ് വൃക്കയുടെ പ്രവർത്തനത്തെ സൂചിപ്പിക്കാം."],
  potassium: ["यह खनिज मांसपेशियों, नसों और हृदय की धड़कन के लिए महत्वपूर्ण है।", "এই খনিজ পেশি, স্নায়ু ও হৃদস্পন্দনের জন্য গুরুত্বপূর্ণ।", "இந்த தாது தசைகள், நரம்புகள் மற்றும் இதயத் துடிப்புக்கு முக்கியமானது.", "ഈ ധാതു പേശികൾക്കും ഞരമ്പുകൾക്കും ഹൃദയമിടിപ്പിനും പ്രധാനമാണ്."]
};

const resultMeanings = {
  hi: { normal: "यह मान लैब की दी गई सामान्य सीमा के भीतर है।", high: "यह मान लैब की दी गई सीमा से अधिक है। इसका कारण जानने के लिए डॉक्टर से चर्चा करें।", low: "यह मान लैब की दी गई सीमा से कम है। इसका कारण जानने के लिए डॉक्टर से चर्चा करें।", recorded: "इस मान की सीमा स्पष्ट रूप से नहीं पढ़ी गई; मूल रिपोर्ट में इसे जाँचें।" },
  bn: { normal: "এই মানটি ল্যাবের দেওয়া স্বাভাবিক সীমার মধ্যে আছে।", high: "এই মানটি ল্যাবের দেওয়া সীমার চেয়ে বেশি। কারণ বুঝতে চিকিৎসকের সঙ্গে আলোচনা করুন।", low: "এই মানটি ল্যাবের দেওয়া সীমার চেয়ে কম। কারণ বুঝতে চিকিৎসকের সঙ্গে আলোচনা করুন।", recorded: "এই মানের সীমা স্পষ্টভাবে পড়া যায়নি; মূল রিপোর্টে যাচাই করুন।" },
  ta: { normal: "இந்த மதிப்பு ஆய்வகம் கொடுத்த இயல்பு வரம்பிற்குள் உள்ளது.", high: "இந்த மதிப்பு ஆய்வகம் கொடுத்த வரம்பை விட அதிகம். காரணத்தை அறிய மருத்துவரிடம் ஆலோசிக்கவும்.", low: "இந்த மதிப்பு ஆய்வகம் கொடுத்த வரம்பை விட குறைவு. காரணத்தை அறிய மருத்துவரிடம் ஆலோசிக்கவும்.", recorded: "இந்த மதிப்பின் வரம்பு தெளிவாகப் படிக்கப்படவில்லை; அசல் அறிக்கையில் சரிபார்க்கவும்." },
  ml: { normal: "ഈ മൂല്യം ലാബ് നൽകിയ സാധാരണ പരിധിക്കുള്ളിലാണ്.", high: "ഈ മൂല്യം ലാബ് നൽകിയ പരിധിയേക്കാൾ കൂടുതലാണ്. കാരണം മനസ്സിലാക്കാൻ ഡോക്ടറുമായി ചർച്ച ചെയ്യുക.", low: "ഈ മൂല്യം ലാബ് നൽകിയ പരിധിയേക്കാൾ കുറവാണ്. കാരണം മനസ്സിലാക്കാൻ ഡോക്ടറുമായി ചർച്ച ചെയ്യുക.", recorded: "ഈ മൂല്യത്തിന്റെ പരിധി വ്യക്തമായി വായിക്കാനായില്ല; യഥാർത്ഥ റിപ്പോർട്ടിൽ പരിശോധിക്കുക." }
};

const state = { findings: [], language: "hi", rawText: "", urgent: false };
const views = [...document.querySelectorAll(".view")];
const fileInput = document.querySelector("#report-file");
const dropZone = document.querySelector("#drop-zone");
const reportText = document.querySelector("#report-text");
const processing = document.querySelector("#processing");

function showView(id, step) {
  views.forEach((view) => view.classList.toggle("active", view.id === id));
  document.querySelectorAll(".step").forEach((item) => item.classList.toggle("active", Number(item.dataset.step) <= step));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setProcessing(visible, title = "Reading your report...", detail = "This happens only on your device.") {
  processing.hidden = !visible;
  document.querySelector("#processing-title").textContent = title;
  document.querySelector("#processing-detail").textContent = detail;
}

async function extractFile(file) {
  if (!file) return;
  if (file.size > 10 * 1024 * 1024) {
    alert("Please choose a file smaller than 10 MB.");
    return;
  }
  setProcessing(true);
  try {
    let text = "";
    if (file.type === "text/plain" || file.name.toLowerCase().endsWith(".txt")) {
      text = await file.text();
    } else if (file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf")) {
      text = await extractPdf(file);
    } else if (file.type.startsWith("image/")) {
      text = await extractImage(file);
    } else {
      throw new Error("This file type is not supported.");
    }
    if (!text.trim()) throw new Error("No readable text was found. Try a clearer image or paste the report text.");
    openReview(text, `${file.name} · ${(file.size / 1024).toFixed(0)} KB`);
  } catch (error) {
    alert(error.message || "The report could not be read.");
  } finally {
    setProcessing(false);
    fileInput.value = "";
  }
}

async function extractPdf(file) {
  setProcessing(true, "Reading PDF text...", "Large reports may take a moment.");
  const pdfjs = await import("https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs");
  pdfjs.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs";
  const pdf = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise;
  const pages = [];
  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const content = await page.getTextContent();
    pages.push(content.items.map((item) => item.str).join(" "));
  }
  return pages.join("\n");
}

async function extractImage(file) {
  if (!window.Tesseract) throw new Error("Image reading could not load. Check your internet connection or paste the report text.");
  setProcessing(true, "Scanning report image...", "Keep this tab open while text is recognised on your device.");
  const result = await window.Tesseract.recognize(file, "eng", {
    logger: ({ status, progress }) => {
      if (progress) document.querySelector("#processing-detail").textContent = `${status} · ${Math.round(progress * 100)}%`;
    }
  });
  return result.data.text;
}

function openReview(text, status = "Pasted report text") {
  reportText.value = text.trim();
  document.querySelector("#file-status").textContent = status;
  showView("review-view", 2);
}

function normaliseName(name) {
  return name.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
}

function classifyByRange(value, range) {
  if (!range) return null;
  const measured = Number.parseFloat(value.replace(/,/g, ""));
  const bounds = [...range.matchAll(/\d[\d,.]*/g)].map((match) => Number.parseFloat(match[0].replace(/,/g, "")));
  if (!Number.isFinite(measured) || !bounds.length) return null;
  if (/below|less\s+than|</i.test(range)) return measured < bounds[0] ? "normal" : "high";
  if (/above|more\s+than|>/i.test(range)) return measured > bounds[0] ? "normal" : "low";
  if (bounds.length >= 2) return measured < bounds[0] ? "low" : measured > bounds[1] ? "high" : "normal";
  return null;
}

function parseReport(text) {
  const findings = [];
  const knownTests = Object.keys(testNames).sort((first, second) => second.length - first.length);
  text.split(/\n+/).forEach((rawLine) => {
    const line = rawLine.replace(/\s+/g, " ").trim();
    if (!line || !/\d/.test(line)) return;
    const lower = line.toLowerCase();
    const matched = knownTests.find((test) => lower.includes(test));
    if (!matched) return;
    const afterName = line.slice(lower.indexOf(matched) + matched.length).replace(/^\s*[:\-]?\s*/, "");
    const valueMatch = afterName.match(/([<>]?\s*\d[\d,.]*(?:\s*(?:lakh|million))?(?:\.\d+)?)\s*([%a-zA-Z/µμ^0-9]*)/);
    if (!valueMatch) return;
    let labelledStatus = null;
    if (/\b(high|elevated)\b/i.test(line)) labelledStatus = "high";
    else if (/\b(low|reduced)\b/i.test(line)) labelledStatus = "low";
    const rangeMatch = line.match(/(?:reference\s*range|normal\s*range|range|optimal|desirable)\s*:?\s*([^|]+?)(?=\s+(?:high|low)$|$)/i);
    const range = rangeMatch?.[1]?.trim() || "";
    const rangeStatus = classifyByRange(valueMatch[1], range);
    const conflict = Boolean(labelledStatus && rangeStatus && labelledStatus !== rangeStatus);
    const status = conflict ? "recorded" : rangeStatus || labelledStatus || "recorded";
    const validation = conflict ? "conflict" : rangeStatus ? "range" : labelledStatus ? "label" : "unverified";
    findings.push({ key: matched, originalName: line.slice(0, lower.indexOf(matched) + matched.length).replace(/^.*?(?=[A-Za-z])/, ""), value: valueMatch[1].replace(/\s/g, ""), unit: valueMatch[2], status, range, validation });
  });
  return findings.filter((item, index, all) => all.findIndex((other) => other.key === item.key) === index);
}

function numericValue(finding) {
  return Number.parseFloat(finding.value.replace(/,/g, ""));
}

function isUrgent(findings) {
  return findings.some((finding) => {
    const value = numericValue(finding);
    if (!Number.isFinite(value)) return false;
    return ((finding.key.includes("glucose") || finding.key.includes("blood sugar")) && value >= 300)
      || (finding.key.includes("haemoglobin") && value < 7)
      || (finding.key === "potassium" && (value < 2.5 || value > 6))
      || (finding.key === "platelet count" && !finding.value.toLowerCase().includes("lakh") && value < 20000);
  });
}

function analyseReport() {
  const text = reportText.value.trim();
  if (text.length < 20) {
    alert("Please add enough report text to continue.");
    reportText.focus();
    return;
  }
  state.rawText = text;
  state.findings = parseReport(text);
  state.urgent = isUrgent(state.findings);
  renderTabs();
  renderResults();
  showView("results-view", 3);
}

function renderTabs() {
  const container = document.querySelector("#language-tabs");
  container.innerHTML = Object.entries(languages).map(([code, language]) => `<button class="language-tab" role="tab" data-language="${code}" aria-selected="${state.language === code}">${language.label}</button>`).join("");
  container.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    state.language = button.dataset.language;
    renderTabs();
    renderResults();
  }));
}

function translatedName(finding, code) {
  return testNames[finding.key]?.[code] || finding.originalName || finding.key;
}

function purposeKey(testKey) {
  if (testKey.includes("haemoglobin") || testKey.includes("hemoglobin")) return testKey;
  if (testKey.includes("blood sugar") || testKey === "glucose") return "bloodSugar";
  if (testKey === "hba1c") return "hba1c";
  if (testKey.includes("cholesterol")) return "cholesterol";
  if (testKey.includes("wbc")) return "wbc";
  if (testKey.includes("platelet")) return "platelets";
  return testKey;
}

function plainExplanation(finding) {
  const languageIndex = ["hi", "bn", "ta", "ml"].indexOf(state.language);
  return testPurposes[purposeKey(finding.key)]?.[languageIndex] || resultMeanings[state.language].recorded;
}

function renderValidation() {
  const rangeChecked = state.findings.filter((finding) => finding.validation === "range").length;
  const needsReview = state.findings.filter((finding) => finding.validation === "conflict" || finding.validation === "unverified").length;
  document.querySelector("#validation-summary").innerHTML = `<div class="validation-summary"><span class="validation-stat">${state.findings.length} supported values found</span><span class="validation-stat">${rangeChecked} checked against lab ranges</span><span class="validation-stat">${needsReview} need manual review</span></div><p class="validation-note">Values are checked only against the reference ranges printed in this report. This checks extraction and range matching; it is not clinical validation or a diagnosis.</p>`;
}

function getPrecautions() {
  const language = languages[state.language];
  const keys = ["general"];
  state.findings.filter((finding) => finding.status === "high" || finding.status === "low").forEach((finding) => {
    if (/glucose|blood sugar|hba1c/.test(finding.key)) keys.push("glucose");
    if (/haemoglobin|hemoglobin/.test(finding.key)) keys.push("haemoglobin");
    if (/cholesterol/.test(finding.key)) keys.push("cholesterol");
  });
  if (state.urgent) keys.unshift("urgent");
  return [...new Set(keys)].map((key) => language.precautions[key]);
}

function renderResults() {
  const language = languages[state.language];
  const abnormal = state.findings.filter((finding) => finding.status === "high" || finding.status === "low").length;
  const summary = state.findings.length
    ? language.intro.replace("{count}", state.findings.length).replace("{abnormal}", abnormal)
    : language.noFindings;
  const summaryNode = document.querySelector("#translated-summary");
  summaryNode.style.fontFamily = `"${language.font}", sans-serif`;
  summaryNode.innerHTML = `<p lang="${state.language}">${summary}</p>`;
  renderValidation();

  document.querySelector("#findings-list").innerHTML = state.findings.length
    ? state.findings.map((finding) => `<article class="finding"><div><div class="finding-name" lang="${state.language}">${escapeHtml(translatedName(finding, state.language))}</div><div class="finding-line">${escapeHtml(finding.originalName || finding.key)}${finding.range ? ` · Lab range: ${escapeHtml(finding.range)}` : ""}</div><p class="finding-explanation" lang="${state.language}">${escapeHtml(plainExplanation(finding))}</p><p class="finding-meaning" lang="${state.language}">${escapeHtml(resultMeanings[state.language][finding.status])}</p><span class="validation-label ${finding.validation === "conflict" || finding.validation === "unverified" ? "review" : ""}">${finding.validation === "range" ? "✓ Checked against printed range" : finding.validation === "label" ? "✓ Matched report label" : finding.validation === "conflict" ? "⚠ Label and range disagree — review original" : "⚠ Range not read — review original"}</span></div><div class="finding-value">${escapeHtml(finding.value)} ${escapeHtml(finding.unit)}<br><span class="status ${finding.status}" lang="${state.language}">${language[finding.status] || language.recorded}</span></div></article>`).join("")
    : `<p class="empty-state">No supported test values were found automatically. Use the translated overview with the original report and consult a doctor.</p>`;

  document.querySelector("#precautions-list").innerHTML = getPrecautions().map((item) => `<li lang="${state.language}" style="font-family: '${language.font}', sans-serif">${item}</li>`).join("");
  document.querySelector("#urgent-alert").innerHTML = state.urgent ? `<div class="urgent"><i data-lucide="triangle-alert"></i><strong lang="${state.language}">${language.precautions.urgent}</strong></div>` : "";
  window.lucide?.createIcons();
}

function escapeHtml(value) {
  const node = document.createElement("div");
  node.textContent = value || "";
  return node.innerHTML;
}

async function searchLocality() {
  const query = document.querySelector("#locality").value.trim();
  if (!query) return document.querySelector("#locality").focus();
  setDoctorStatus("Finding the locality...");
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=in&q=${encodeURIComponent(query)}`, { headers: { "Accept-Language": "en" } });
    const [place] = await response.json();
    if (!place) throw new Error("Locality not found. Try adding the city or PIN code.");
    await findNearbyCare(Number(place.lat), Number(place.lon));
  } catch (error) {
    setDoctorStatus(error.message || "Nearby care could not be loaded.");
  }
}

async function searchPharmacies() {
  const query = document.querySelector("#locality").value.trim();
  if (!query) return document.querySelector("#locality").focus();
  setPharmacyStatus("Finding the locality...");
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=in&q=${encodeURIComponent(query)}`, { headers: { "Accept-Language": "en" } });
    const [place] = await response.json();
    if (!place) throw new Error("Locality not found. Try adding the city or PIN code.");
    await findNearbyPharmacies(Number(place.lat), Number(place.lon));
  } catch (error) {
    setPharmacyStatus(error.message || "Nearby pharmacies could not be loaded.");
  }
}

async function findNearbyCare(latitude, longitude) {
  setDoctorStatus("Searching within 5 km...");
  const query = `[out:json][timeout:20];(node[amenity~"doctors|clinic|hospital"](around:5000,${latitude},${longitude});way[amenity~"doctors|clinic|hospital"](around:5000,${latitude},${longitude}););out center 12;`;
  try {
    const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("The map service is busy. Please try again shortly.");
    const data = await response.json();
    renderDoctors(data.elements, latitude, longitude);
  } catch (error) {
    renderMapFallback(latitude, longitude, error.message || "The facility directory could not be loaded.");
  }
}

async function findNearbyPharmacies(latitude, longitude) {
  setPharmacyStatus("Searching pharmacies within 5 km...");
  const query = `[out:json][timeout:20];(node[amenity=pharmacy](around:5000,${latitude},${longitude});way[amenity=pharmacy](around:5000,${latitude},${longitude});node[healthcare=pharmacy](around:5000,${latitude},${longitude});way[healthcare=pharmacy](around:5000,${latitude},${longitude});node[shop~"chemist|pharmacy"](around:5000,${latitude},${longitude});way[shop~"chemist|pharmacy"](around:5000,${latitude},${longitude}););out center 12;`;
  try {
    const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error("The pharmacy map service is busy. Please try again shortly.");
    const data = await response.json();
    renderPharmacies(data.elements, latitude, longitude);
  } catch (error) {
    renderPharmacyFallback(latitude, longitude, error.message || "The pharmacy directory could not be loaded.");
  }
}

function renderMapFallback(latitude, longitude, message) {
  const mapQuery = encodeURIComponent(`doctors near ${latitude},${longitude}`);
  document.querySelector("#doctor-results").innerHTML = `<div class="map-fallback"><p class="empty-state">${escapeHtml(message)} Use a map search instead and verify the doctor's qualifications before booking.</p><a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener">Search nearby doctors on Google Maps ↗</a><a href="https://www.openstreetmap.org/#map=14/${latitude}/${longitude}" target="_blank" rel="noopener">Open this locality on OpenStreetMap ↗</a></div>`;
}

function renderDoctors(elements, latitude, longitude) {
  const results = elements.filter((item) => item.tags?.name).slice(0, 6);
  if (!results.length) {
    setDoctorStatus("No named facilities were found within 5 km. Try a nearby city or a broader locality.");
    return;
  }
  document.querySelector("#doctor-results").innerHTML = results.map((item) => {
    const lat = item.lat || item.center?.lat;
    const lon = item.lon || item.center?.lon;
    const distance = getDistance(latitude, longitude, lat, lon);
    const type = item.tags.amenity === "hospital" ? "Hospital" : item.tags.amenity === "clinic" ? "Clinic" : "Doctor";
    return `<article class="doctor-card"><strong>${escapeHtml(item.tags.name)}</strong><span>${type} · ${distance.toFixed(1)} km away</span><a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}" target="_blank" rel="noopener">View on map ↗</a></article>`;
  }).join("");
}

function renderPharmacyFallback(latitude, longitude, message) {
  const medicine = document.querySelector("#medicine").value.trim();
  const mapQuery = encodeURIComponent(`${medicine ? `${medicine} ` : ""}pharmacy near ${latitude},${longitude}`);
  document.querySelector("#pharmacy-results").innerHTML = `<div class="map-fallback"><p class="empty-state">${escapeHtml(message)} Call the pharmacy to confirm the medicine is available.</p><a href="https://www.google.com/maps/search/?api=1&query=${mapQuery}" target="_blank" rel="noopener">Search pharmacies on Google Maps ↗</a><a href="https://www.openstreetmap.org/#map=14/${latitude}/${longitude}" target="_blank" rel="noopener">Open this locality on OpenStreetMap ↗</a></div>`;
}

function renderPharmacies(elements, latitude, longitude) {
  const results = elements.filter((item) => item.tags?.name).slice(0, 6);
  if (!results.length) {
    setPharmacyStatus("No named pharmacies were found within 5 km. Try a nearby city or a broader locality.");
    return;
  }
  document.querySelector("#pharmacy-results").innerHTML = results.map((item) => {
    const lat = item.lat || item.center?.lat;
    const lon = item.lon || item.center?.lon;
    const distance = getDistance(latitude, longitude, lat, lon);
    const address = [item.tags["addr:street"], item.tags["addr:city"]].filter(Boolean).join(", ");
    return `<article class="doctor-card"><strong>${escapeHtml(item.tags.name)}</strong><span>Pharmacy · ${distance.toFixed(1)} km away${address ? ` · ${escapeHtml(address)}` : ""}</span><a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}" target="_blank" rel="noopener">View on map ↗</a></article>`;
  }).join("");
}

function getDistance(lat1, lon1, lat2, lon2) {
  const toRadians = (degrees) => degrees * Math.PI / 180;
  const deltaLat = toRadians(lat2 - lat1);
  const deltaLon = toRadians(lon2 - lon1);
  const value = Math.sin(deltaLat / 2) ** 2 + Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(deltaLon / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(value), Math.sqrt(1 - value));
}

function setDoctorStatus(message) {
  document.querySelector("#doctor-results").innerHTML = `<p class="empty-state">${escapeHtml(message)}</p>`;
}

function setPharmacyStatus(message) {
  document.querySelector("#pharmacy-results").innerHTML = `<p class="empty-state">${escapeHtml(message)}</p>`;
}

function useCurrentLocation() {
  if (!navigator.geolocation) return setDoctorStatus("Location is not supported by this browser. Search by city or PIN code instead.");
  setDoctorStatus("Requesting your location...");
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      findNearbyCare(coords.latitude, coords.longitude);
      findNearbyPharmacies(coords.latitude, coords.longitude);
    },
    () => setDoctorStatus("Location access was unavailable. Search by city or PIN code instead."),
    { enableHighAccuracy: false, timeout: 10000 }
  );
}

fileInput.addEventListener("change", () => extractFile(fileInput.files[0]));
["dragenter", "dragover"].forEach((eventName) => dropZone.addEventListener(eventName, (event) => { event.preventDefault(); dropZone.classList.add("dragging"); }));
["dragleave", "drop"].forEach((eventName) => dropZone.addEventListener(eventName, (event) => { event.preventDefault(); dropZone.classList.remove("dragging"); }));
dropZone.addEventListener("drop", (event) => extractFile(event.dataTransfer.files[0]));
document.querySelector("#paste-report").addEventListener("click", () => document.querySelector("#paste-dialog").showModal());
document.querySelector("#use-pasted-text").addEventListener("click", (event) => {
  const text = document.querySelector("#paste-text").value.trim();
  if (text.length < 20) { event.preventDefault(); alert("Please paste at least a few lines from the report."); return; }
  openReview(text);
});
document.querySelector("#try-demo").addEventListener("click", () => openReview(sampleReport, "Sample CBC, diabetes and lipid report"));
document.querySelector("#back-to-upload").addEventListener("click", () => showView("upload-view", 1));
document.querySelector("#continue-button").addEventListener("click", analyseReport);
document.querySelector("#new-report").addEventListener("click", () => { reportText.value = ""; showView("upload-view", 1); });
document.querySelector("#find-doctors").addEventListener("click", searchLocality);
document.querySelector("#locality").addEventListener("keydown", (event) => { if (event.key === "Enter") searchLocality(); });
document.querySelector("#find-pharmacies").addEventListener("click", searchPharmacies);
document.querySelector("#medicine").addEventListener("keydown", (event) => { if (event.key === "Enter") searchPharmacies(); });
document.querySelector("#use-location").addEventListener("click", useCurrentLocation);
let deferredInstallPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  const installButton = document.querySelector("#install-app");
  if (installButton) installButton.hidden = false;
});

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  const installButton = document.querySelector("#install-app");
  if (installButton) installButton.hidden = true;
});

window.addEventListener("DOMContentLoaded", () => {
  window.lucide?.createIcons();
  const installButton = document.querySelector("#install-app");
  installButton?.addEventListener("click", async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installButton.hidden = true;
  });
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
});