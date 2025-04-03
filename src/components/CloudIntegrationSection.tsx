
import React from 'react';
import { Cloud, Shield, Zap, Lock, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CloudIntegrationSection = () => {
  return (
    <section className="py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-phthalo-light/50 to-white/50 -z-10"></div>
      <div className="absolute -right-64 -top-64 w-[500px] h-[500px] bg-phthalo-light/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -left-64 -bottom-64 w-[500px] h-[500px] bg-phthalo-light/20 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 max-w-xl animate-on-scroll">
            <div className="inline-block px-3 py-1 text-sm font-medium bg-phthalo-light text-phthalo-dark rounded-full">
              Powered by Microsoft Azure
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Secure & Scalable Cloud Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground">
              Our platform leverages the power of Microsoft Azure to deliver a secure, 
              high-performance experience with seamless scaling for our growing alumni community.
            </p>
            
            <div className="space-y-6 pt-4">
              {[
                {
                  icon: <Shield />,
                  title: "Enterprise-Grade Security",
                  description: "Advanced threat protection and compliance with industry standards"
                },
                {
                  icon: <Zap />,
                  title: "High Performance",
                  description: "Fast response times and smooth user experience globally"
                },
                {
                  icon: <Server />,
                  title: "Scalable Infrastructure",
                  description: "Automatic scaling to handle user growth and peak usage periods"
                },
                {
                  icon: <Lock />,
                  title: "Data Protection",
                  description: "End-to-end encryption and secure storage for all your data"
                }
              ].map((feature, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1 w-12 h-12 rounded-lg bg-phthalo-light border border-phthalo-light/50 flex items-center justify-center text-phthalo">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <Button 
                variant="outline"
                className="button-transition button-hover focus-ring"
              >
                Learn More About Our Technology
              </Button>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-phthalo/20 to-phthalo-medium/20 rounded-3xl blur-2xl -z-10 transform rotate-6"></div>
              
              <div className="glass-card rounded-2xl overflow-hidden shadow-strong relative">
                <div className="bg-gradient-to-r from-phthalo to-phthalo-dark p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Cloud className="h-8 w-8 mr-3" />
                      <div>
                        <h3 className="font-medium">Azure Cloud Services</h3>
                        <p className="text-sm text-phthalo-light">Powering AlumniConnect</p>
                      </div>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <p className="text-phthalo-light">CPU Usage</p>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">12%</span>
                        <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full w-[12%] bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg">
                      <p className="text-phthalo-light">Memory</p>
                      <div className="flex items-center justify-between">
                        <span className="font-medium">24%</span>
                        <div className="w-20 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="h-full w-[24%] bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <h4 className="font-medium mb-3">Active Services</h4>
                  
                  <div className="space-y-3">
                    {[
                      { name: "Azure AI Services", status: "Operational", statusColor: "bg-green-500" },
                      { name: "Azure Communication Services", status: "Operational", statusColor: "bg-green-500" },
                      { name: "Azure Storage", status: "Operational", statusColor: "bg-green-500" },
                      { name: "Azure Database", status: "Operational", statusColor: "bg-green-500" }
                    ].map((service, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span>{service.name}</span>
                        <div className="flex items-center">
                          <div className={`h-2 w-2 rounded-full ${service.statusColor} mr-2`}></div>
                          <span className="text-sm text-green-600">{service.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex justify-between items-center pt-2">
                    <div className="text-sm text-muted-foreground">
                      Last updated: 2 minutes ago
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-phthalo hover:text-phthalo-dark hover:bg-phthalo-light"
                    >
                      Refresh
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudIntegrationSection;
